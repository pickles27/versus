-- USERS
CREATE TABLE users (
  user_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  auth0_id TEXT UNIQUE NOT NULL,
  username TEXT UNIQUE NOT NULL CHECK (length(username) >= 3),
  bio TEXT,
  is_visible BOOLEAN DEFAULT true,
  last_active_at TIMESTAMP DEFAULT now(),
  created_at TIMESTAMP DEFAULT now()
);

CREATE INDEX idx_users_is_visible ON users(is_visible);

-- FRIEND REQUESTS
CREATE TABLE friend_requests (
  friend_request_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  from_user_id UUID NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
  to_user_id UUID NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
  status TEXT NOT NULL CHECK (status IN ('pending', 'accepted', 'rejected')),
  created_at TIMESTAMP DEFAULT now(),
  responded_at TIMESTAMP,
  CONSTRAINT one_request_per_pair UNIQUE (from_user_id, to_user_id)
);

CREATE INDEX idx_friend_requests_from_user ON friend_requests(from_user_id);
CREATE INDEX idx_friend_requests_to_user ON friend_requests(to_user_id);

-- FRIENDS
CREATE TABLE friends (
  user_id_1 UUID NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
  user_id_2 UUID NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT now(),
  PRIMARY KEY (user_id_1, user_id_2),
  CONSTRAINT user_id_order CHECK (user_id_1 < user_id_2)
);

-- GAMES
CREATE TABLE games (
  game_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT UNIQUE NOT NULL,
  description TEXT,
  thumbnail_url TEXT,
  min_players INTEGER NOT NULL CHECK (min_players >= 1),
  max_players INTEGER NOT NULL CHECK (max_players >= min_players),
  created_at TIMESTAMP DEFAULT now()
);

-- SESSIONS
CREATE TABLE sessions (
  session_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  game_id UUID NOT NULL REFERENCES games(game_id) ON DELETE CASCADE,
  host_user_id UUID NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
  is_private BOOLEAN DEFAULT false,
  status TEXT NOT NULL CHECK (status IN ('active', 'completed')),
  game_mode TEXT DEFAULT 'realtime' CHECK (game_mode IN ('realtime', 'turn-based')),
  created_at TIMESTAMP DEFAULT now(),
  started_at TIMESTAMP,
  completed_at TIMESTAMP
);

CREATE INDEX idx_sessions_status_private ON sessions(status, is_private);

-- SESSION INVITES
CREATE TABLE session_invites (
  invite_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID NOT NULL REFERENCES sessions(session_id) ON DELETE CASCADE,
  invited_user_id UUID NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
  invited_by_user_id UUID NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'declined')),
  invited_at TIMESTAMP DEFAULT now(),
  accepted_at TIMESTAMP,
  UNIQUE (session_id, invited_user_id)
);

-- SESSION PLAYERS
CREATE TABLE session_players (
  session_id UUID NOT NULL REFERENCES sessions(session_id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
  joined_at TIMESTAMP DEFAULT now(),
  PRIMARY KEY (session_id, user_id)
);

CREATE INDEX idx_session_players_session_id ON session_players(session_id);
CREATE INDEX idx_session_players_user_id ON session_players(user_id);

-- GAME STATE
CREATE TABLE game_state (
  session_id UUID PRIMARY KEY REFERENCES sessions(session_id) ON DELETE CASCADE,
  state JSONB NOT NULL,
  updated_at TIMESTAMP DEFAULT now()
);

CREATE OR REPLACE FUNCTION update_game_state_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at := now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_game_state_timestamp
BEFORE UPDATE ON game_state
FOR EACH ROW
EXECUTE FUNCTION update_game_state_timestamp();

-- GAME RESULTS
CREATE TABLE game_results (
  result_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID NOT NULL REFERENCES sessions(session_id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
  game_id UUID NOT NULL REFERENCES games(game_id) ON DELETE CASCADE,
  score INTEGER,
  placement INTEGER,
  won BOOLEAN,
  completed_at TIMESTAMP DEFAULT now()
);

CREATE INDEX idx_game_results_user_id ON game_results(user_id);
CREATE INDEX idx_game_results_game_id ON game_results(game_id);

-- LEADERBOARDS
CREATE TABLE leaderboards (
  game_id UUID NOT NULL REFERENCES games(game_id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
  top_score INTEGER,
  total_wins INTEGER DEFAULT 0,
  total_games INTEGER DEFAULT 0,
  win_rate NUMERIC(5, 2),
  updated_at TIMESTAMP DEFAULT now(),
  PRIMARY KEY (game_id, user_id)
);

CREATE INDEX idx_leaderboards_game_id ON leaderboards(game_id);

CREATE OR REPLACE FUNCTION update_leaderboard_after_game_result()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO leaderboards (
    game_id, user_id, top_score, total_wins, total_games, win_rate, updated_at
  )
  VALUES (
    NEW.game_id,
    NEW.user_id,
    NEW.score,
    CASE WHEN NEW.won THEN 1 ELSE 0 END,
    1,
    CASE WHEN NEW.won THEN 100.0 ELSE 0.0 END,
    now()
  )
  ON CONFLICT (game_id, user_id) DO UPDATE
  SET
    top_score = GREATEST(leaderboards.top_score, NEW.score),
    total_wins = leaderboards.total_wins + (CASE WHEN NEW.won THEN 1 ELSE 0 END),
    total_games = leaderboards.total_games + 1,
    win_rate = ROUND(
      (leaderboards.total_wins + CASE WHEN NEW.won THEN 1 ELSE 0 END)::DECIMAL
      / (leaderboards.total_games + 1) * 100, 2
    ),
    updated_at = now();

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_leaderboard
AFTER INSERT ON game_results
FOR EACH ROW
EXECUTE FUNCTION update_leaderboard_after_game_result();
