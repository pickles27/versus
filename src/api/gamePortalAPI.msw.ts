/**
 * Generated by orval v7.8.0 🍺
 * Do not edit manually.
 * Game Portal API
 * OpenAPI spec version: 1.0.0
 */
import {
  faker
} from '@faker-js/faker';

import {
  HttpResponse,
  delay,
  http
} from 'msw';

import type {
  FriendRequests,
  Friends,
  GameResults,
  GameState,
  Games,
  Leaderboards,
  SessionInvites,
  SessionPlayers,
  Sessions,
  Users
} from '../models';


export const getGetUsersResponseMock = (): Users[] => (Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({user_id: faker.string.uuid(), auth0_id: faker.string.alpha(20), username: faker.string.alpha(20), bio: faker.string.alpha(20), is_visible: faker.datatype.boolean(), last_active_at: `${faker.date.past().toISOString().split('.')[0]}Z`, created_at: `${faker.date.past().toISOString().split('.')[0]}Z`})))

export const getGetUsersByIdResponseMock = (overrideResponse: Partial< Users > = {}): Users => ({user_id: faker.string.uuid(), auth0_id: faker.string.alpha(20), username: faker.string.alpha(20), bio: faker.string.alpha(20), is_visible: faker.datatype.boolean(), last_active_at: `${faker.date.past().toISOString().split('.')[0]}Z`, created_at: `${faker.date.past().toISOString().split('.')[0]}Z`, ...overrideResponse})

export const getGetFriendRequestsResponseMock = (): FriendRequests[] => (Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({friend_request_id: faker.string.uuid(), from_user_id: faker.string.uuid(), to_user_id: faker.string.uuid(), status: faker.string.alpha(20), created_at: `${faker.date.past().toISOString().split('.')[0]}Z`, responded_at: `${faker.date.past().toISOString().split('.')[0]}Z`})))

export const getGetFriendRequestsByIdResponseMock = (overrideResponse: Partial< FriendRequests > = {}): FriendRequests => ({friend_request_id: faker.string.uuid(), from_user_id: faker.string.uuid(), to_user_id: faker.string.uuid(), status: faker.string.alpha(20), created_at: `${faker.date.past().toISOString().split('.')[0]}Z`, responded_at: `${faker.date.past().toISOString().split('.')[0]}Z`, ...overrideResponse})

export const getGetFriendsResponseMock = (): Friends[] => (Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({user_id_1: faker.string.uuid(), user_id_2: faker.string.uuid(), created_at: `${faker.date.past().toISOString().split('.')[0]}Z`})))

export const getGetFriendsByIdResponseMock = (overrideResponse: Partial< Friends > = {}): Friends => ({user_id_1: faker.string.uuid(), user_id_2: faker.string.uuid(), created_at: `${faker.date.past().toISOString().split('.')[0]}Z`, ...overrideResponse})

export const getGetGamesResponseMock = (): Games[] => (Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({game_id: faker.string.uuid(), name: faker.string.alpha(20), description: faker.string.alpha(20), thumbnail_url: faker.string.alpha(20), min_players: faker.number.int({min: undefined, max: undefined}), max_players: faker.number.int({min: undefined, max: undefined}), created_at: `${faker.date.past().toISOString().split('.')[0]}Z`})))

export const getGetGamesByIdResponseMock = (overrideResponse: Partial< Games > = {}): Games => ({game_id: faker.string.uuid(), name: faker.string.alpha(20), description: faker.string.alpha(20), thumbnail_url: faker.string.alpha(20), min_players: faker.number.int({min: undefined, max: undefined}), max_players: faker.number.int({min: undefined, max: undefined}), created_at: `${faker.date.past().toISOString().split('.')[0]}Z`, ...overrideResponse})

export const getGetSessionsResponseMock = (): Sessions[] => (Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({session_id: faker.string.uuid(), game_id: faker.string.uuid(), host_user_id: faker.string.uuid(), is_private: faker.datatype.boolean(), status: faker.string.alpha(20), game_mode: faker.string.alpha(20), created_at: `${faker.date.past().toISOString().split('.')[0]}Z`, started_at: `${faker.date.past().toISOString().split('.')[0]}Z`, completed_at: `${faker.date.past().toISOString().split('.')[0]}Z`})))

export const getGetSessionsByIdResponseMock = (overrideResponse: Partial< Sessions > = {}): Sessions => ({session_id: faker.string.uuid(), game_id: faker.string.uuid(), host_user_id: faker.string.uuid(), is_private: faker.datatype.boolean(), status: faker.string.alpha(20), game_mode: faker.string.alpha(20), created_at: `${faker.date.past().toISOString().split('.')[0]}Z`, started_at: `${faker.date.past().toISOString().split('.')[0]}Z`, completed_at: `${faker.date.past().toISOString().split('.')[0]}Z`, ...overrideResponse})

export const getGetSessionInvitesResponseMock = (): SessionInvites[] => (Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({invite_id: faker.string.uuid(), session_id: faker.string.uuid(), invited_user_id: faker.string.uuid(), invited_by_user_id: faker.string.uuid(), status: faker.string.alpha(20), invited_at: `${faker.date.past().toISOString().split('.')[0]}Z`, accepted_at: `${faker.date.past().toISOString().split('.')[0]}Z`})))

export const getGetSessionInvitesByIdResponseMock = (overrideResponse: Partial< SessionInvites > = {}): SessionInvites => ({invite_id: faker.string.uuid(), session_id: faker.string.uuid(), invited_user_id: faker.string.uuid(), invited_by_user_id: faker.string.uuid(), status: faker.string.alpha(20), invited_at: `${faker.date.past().toISOString().split('.')[0]}Z`, accepted_at: `${faker.date.past().toISOString().split('.')[0]}Z`, ...overrideResponse})

export const getGetSessionPlayersResponseMock = (): SessionPlayers[] => (Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({session_id: faker.string.uuid(), user_id: faker.string.uuid(), joined_at: `${faker.date.past().toISOString().split('.')[0]}Z`})))

export const getGetSessionPlayersByIdResponseMock = (overrideResponse: Partial< SessionPlayers > = {}): SessionPlayers => ({session_id: faker.string.uuid(), user_id: faker.string.uuid(), joined_at: `${faker.date.past().toISOString().split('.')[0]}Z`, ...overrideResponse})

export const getGetGameStateResponseMock = (): GameState[] => (Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({session_id: faker.string.uuid(), state: {}, updated_at: `${faker.date.past().toISOString().split('.')[0]}Z`})))

export const getGetGameStateByIdResponseMock = (overrideResponse: Partial< GameState > = {}): GameState => ({session_id: faker.string.uuid(), state: {}, updated_at: `${faker.date.past().toISOString().split('.')[0]}Z`, ...overrideResponse})

export const getGetGameResultsResponseMock = (): GameResults[] => (Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({result_id: faker.string.uuid(), session_id: faker.string.uuid(), user_id: faker.string.uuid(), game_id: faker.string.uuid(), score: faker.number.int({min: undefined, max: undefined}), placement: faker.number.int({min: undefined, max: undefined}), won: faker.datatype.boolean(), completed_at: `${faker.date.past().toISOString().split('.')[0]}Z`})))

export const getGetGameResultsByIdResponseMock = (overrideResponse: Partial< GameResults > = {}): GameResults => ({result_id: faker.string.uuid(), session_id: faker.string.uuid(), user_id: faker.string.uuid(), game_id: faker.string.uuid(), score: faker.number.int({min: undefined, max: undefined}), placement: faker.number.int({min: undefined, max: undefined}), won: faker.datatype.boolean(), completed_at: `${faker.date.past().toISOString().split('.')[0]}Z`, ...overrideResponse})

export const getGetLeaderboardsResponseMock = (): Leaderboards[] => (Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({game_id: faker.string.uuid(), user_id: faker.string.uuid(), top_score: faker.number.int({min: undefined, max: undefined}), total_wins: faker.number.int({min: undefined, max: undefined}), total_games: faker.number.int({min: undefined, max: undefined}), win_rate: faker.number.int({min: undefined, max: undefined}), updated_at: `${faker.date.past().toISOString().split('.')[0]}Z`})))

export const getGetLeaderboardsByIdResponseMock = (overrideResponse: Partial< Leaderboards > = {}): Leaderboards => ({game_id: faker.string.uuid(), user_id: faker.string.uuid(), top_score: faker.number.int({min: undefined, max: undefined}), total_wins: faker.number.int({min: undefined, max: undefined}), total_games: faker.number.int({min: undefined, max: undefined}), win_rate: faker.number.int({min: undefined, max: undefined}), updated_at: `${faker.date.past().toISOString().split('.')[0]}Z`, ...overrideResponse})


export const getGetUsersMockHandler = (overrideResponse?: Users[] | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<Users[]> | Users[])) => {
  return http.get('*/users', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetUsersResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getCreateUsersMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<void> | void)) => {
  return http.post('*/users', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 201,
        
      })
  })
}

export const getGetUsersByIdMockHandler = (overrideResponse?: Users | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<Users> | Users)) => {
  return http.get('*/users/:userId', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetUsersByIdResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getUpdateUsersMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.put>[1]>[0]) => Promise<void> | void)) => {
  return http.put('*/users/:userId', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 200,
        
      })
  })
}

export const getDeleteUsersMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.delete>[1]>[0]) => Promise<void> | void)) => {
  return http.delete('*/users/:userId', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 204,
        
      })
  })
}

export const getGetFriendRequestsMockHandler = (overrideResponse?: FriendRequests[] | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<FriendRequests[]> | FriendRequests[])) => {
  return http.get('*/friend_requests', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetFriendRequestsResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getCreateFriendRequestsMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<void> | void)) => {
  return http.post('*/friend_requests', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 201,
        
      })
  })
}

export const getGetFriendRequestsByIdMockHandler = (overrideResponse?: FriendRequests | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<FriendRequests> | FriendRequests)) => {
  return http.get('*/friend_requests/:friendRequestId', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetFriendRequestsByIdResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getUpdateFriendRequestsMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.put>[1]>[0]) => Promise<void> | void)) => {
  return http.put('*/friend_requests/:friendRequestId', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 200,
        
      })
  })
}

export const getDeleteFriendRequestsMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.delete>[1]>[0]) => Promise<void> | void)) => {
  return http.delete('*/friend_requests/:friendRequestId', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 204,
        
      })
  })
}

export const getGetFriendsMockHandler = (overrideResponse?: Friends[] | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<Friends[]> | Friends[])) => {
  return http.get('*/friends', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetFriendsResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getCreateFriendsMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<void> | void)) => {
  return http.post('*/friends', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 201,
        
      })
  })
}

export const getGetFriendsByIdMockHandler = (overrideResponse?: Friends | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<Friends> | Friends)) => {
  return http.get('*/friends/:userId1/:userId2', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetFriendsByIdResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getUpdateFriendsMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.put>[1]>[0]) => Promise<void> | void)) => {
  return http.put('*/friends/:userId1/:userId2', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 200,
        
      })
  })
}

export const getDeleteFriendsMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.delete>[1]>[0]) => Promise<void> | void)) => {
  return http.delete('*/friends/:userId1/:userId2', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 204,
        
      })
  })
}

export const getGetGamesMockHandler = (overrideResponse?: Games[] | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<Games[]> | Games[])) => {
  return http.get('*/games', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetGamesResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getCreateGamesMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<void> | void)) => {
  return http.post('*/games', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 201,
        
      })
  })
}

export const getGetGamesByIdMockHandler = (overrideResponse?: Games | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<Games> | Games)) => {
  return http.get('*/games/:gameId', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetGamesByIdResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getUpdateGamesMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.put>[1]>[0]) => Promise<void> | void)) => {
  return http.put('*/games/:gameId', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 200,
        
      })
  })
}

export const getDeleteGamesMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.delete>[1]>[0]) => Promise<void> | void)) => {
  return http.delete('*/games/:gameId', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 204,
        
      })
  })
}

export const getGetSessionsMockHandler = (overrideResponse?: Sessions[] | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<Sessions[]> | Sessions[])) => {
  return http.get('*/sessions', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetSessionsResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getCreateSessionsMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<void> | void)) => {
  return http.post('*/sessions', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 201,
        
      })
  })
}

export const getGetSessionsByIdMockHandler = (overrideResponse?: Sessions | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<Sessions> | Sessions)) => {
  return http.get('*/sessions/:sessionId', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetSessionsByIdResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getUpdateSessionsMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.put>[1]>[0]) => Promise<void> | void)) => {
  return http.put('*/sessions/:sessionId', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 200,
        
      })
  })
}

export const getDeleteSessionsMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.delete>[1]>[0]) => Promise<void> | void)) => {
  return http.delete('*/sessions/:sessionId', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 204,
        
      })
  })
}

export const getGetSessionInvitesMockHandler = (overrideResponse?: SessionInvites[] | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<SessionInvites[]> | SessionInvites[])) => {
  return http.get('*/session_invites', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetSessionInvitesResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getCreateSessionInvitesMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<void> | void)) => {
  return http.post('*/session_invites', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 201,
        
      })
  })
}

export const getGetSessionInvitesByIdMockHandler = (overrideResponse?: SessionInvites | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<SessionInvites> | SessionInvites)) => {
  return http.get('*/session_invites/:inviteId', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetSessionInvitesByIdResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getUpdateSessionInvitesMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.put>[1]>[0]) => Promise<void> | void)) => {
  return http.put('*/session_invites/:inviteId', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 200,
        
      })
  })
}

export const getDeleteSessionInvitesMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.delete>[1]>[0]) => Promise<void> | void)) => {
  return http.delete('*/session_invites/:inviteId', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 204,
        
      })
  })
}

export const getGetSessionPlayersMockHandler = (overrideResponse?: SessionPlayers[] | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<SessionPlayers[]> | SessionPlayers[])) => {
  return http.get('*/session_players', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetSessionPlayersResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getCreateSessionPlayersMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<void> | void)) => {
  return http.post('*/session_players', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 201,
        
      })
  })
}

export const getGetSessionPlayersByIdMockHandler = (overrideResponse?: SessionPlayers | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<SessionPlayers> | SessionPlayers)) => {
  return http.get('*/session_players/:sessionId/:userId', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetSessionPlayersByIdResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getUpdateSessionPlayersMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.put>[1]>[0]) => Promise<void> | void)) => {
  return http.put('*/session_players/:sessionId/:userId', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 200,
        
      })
  })
}

export const getDeleteSessionPlayersMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.delete>[1]>[0]) => Promise<void> | void)) => {
  return http.delete('*/session_players/:sessionId/:userId', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 204,
        
      })
  })
}

export const getGetGameStateMockHandler = (overrideResponse?: GameState[] | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<GameState[]> | GameState[])) => {
  return http.get('*/game_state', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetGameStateResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getCreateGameStateMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<void> | void)) => {
  return http.post('*/game_state', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 201,
        
      })
  })
}

export const getGetGameStateByIdMockHandler = (overrideResponse?: GameState | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<GameState> | GameState)) => {
  return http.get('*/game_state/:sessionId', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetGameStateByIdResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getUpdateGameStateMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.put>[1]>[0]) => Promise<void> | void)) => {
  return http.put('*/game_state/:sessionId', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 200,
        
      })
  })
}

export const getDeleteGameStateMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.delete>[1]>[0]) => Promise<void> | void)) => {
  return http.delete('*/game_state/:sessionId', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 204,
        
      })
  })
}

export const getGetGameResultsMockHandler = (overrideResponse?: GameResults[] | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<GameResults[]> | GameResults[])) => {
  return http.get('*/game_results', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetGameResultsResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getCreateGameResultsMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<void> | void)) => {
  return http.post('*/game_results', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 201,
        
      })
  })
}

export const getGetGameResultsByIdMockHandler = (overrideResponse?: GameResults | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<GameResults> | GameResults)) => {
  return http.get('*/game_results/:resultId', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetGameResultsByIdResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getUpdateGameResultsMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.put>[1]>[0]) => Promise<void> | void)) => {
  return http.put('*/game_results/:resultId', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 200,
        
      })
  })
}

export const getDeleteGameResultsMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.delete>[1]>[0]) => Promise<void> | void)) => {
  return http.delete('*/game_results/:resultId', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 204,
        
      })
  })
}

export const getGetLeaderboardsMockHandler = (overrideResponse?: Leaderboards[] | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<Leaderboards[]> | Leaderboards[])) => {
  return http.get('*/leaderboards', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetLeaderboardsResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getCreateLeaderboardsMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<void> | void)) => {
  return http.post('*/leaderboards', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 201,
        
      })
  })
}

export const getGetLeaderboardsByIdMockHandler = (overrideResponse?: Leaderboards | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<Leaderboards> | Leaderboards)) => {
  return http.get('*/leaderboards/:gameId/:userId', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetLeaderboardsByIdResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getUpdateLeaderboardsMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.put>[1]>[0]) => Promise<void> | void)) => {
  return http.put('*/leaderboards/:gameId/:userId', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 200,
        
      })
  })
}

export const getDeleteLeaderboardsMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.delete>[1]>[0]) => Promise<void> | void)) => {
  return http.delete('*/leaderboards/:gameId/:userId', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 204,
        
      })
  })
}
export const getGamePortalAPIMock = () => [
  getGetUsersMockHandler(),
  getCreateUsersMockHandler(),
  getGetUsersByIdMockHandler(),
  getUpdateUsersMockHandler(),
  getDeleteUsersMockHandler(),
  getGetFriendRequestsMockHandler(),
  getCreateFriendRequestsMockHandler(),
  getGetFriendRequestsByIdMockHandler(),
  getUpdateFriendRequestsMockHandler(),
  getDeleteFriendRequestsMockHandler(),
  getGetFriendsMockHandler(),
  getCreateFriendsMockHandler(),
  getGetFriendsByIdMockHandler(),
  getUpdateFriendsMockHandler(),
  getDeleteFriendsMockHandler(),
  getGetGamesMockHandler(),
  getCreateGamesMockHandler(),
  getGetGamesByIdMockHandler(),
  getUpdateGamesMockHandler(),
  getDeleteGamesMockHandler(),
  getGetSessionsMockHandler(),
  getCreateSessionsMockHandler(),
  getGetSessionsByIdMockHandler(),
  getUpdateSessionsMockHandler(),
  getDeleteSessionsMockHandler(),
  getGetSessionInvitesMockHandler(),
  getCreateSessionInvitesMockHandler(),
  getGetSessionInvitesByIdMockHandler(),
  getUpdateSessionInvitesMockHandler(),
  getDeleteSessionInvitesMockHandler(),
  getGetSessionPlayersMockHandler(),
  getCreateSessionPlayersMockHandler(),
  getGetSessionPlayersByIdMockHandler(),
  getUpdateSessionPlayersMockHandler(),
  getDeleteSessionPlayersMockHandler(),
  getGetGameStateMockHandler(),
  getCreateGameStateMockHandler(),
  getGetGameStateByIdMockHandler(),
  getUpdateGameStateMockHandler(),
  getDeleteGameStateMockHandler(),
  getGetGameResultsMockHandler(),
  getCreateGameResultsMockHandler(),
  getGetGameResultsByIdMockHandler(),
  getUpdateGameResultsMockHandler(),
  getDeleteGameResultsMockHandler(),
  getGetLeaderboardsMockHandler(),
  getCreateLeaderboardsMockHandler(),
  getGetLeaderboardsByIdMockHandler(),
  getUpdateLeaderboardsMockHandler(),
  getDeleteLeaderboardsMockHandler()
]
