export default async function NewGame() {
  const games = [{ id: '1', name: 'Game 1' }, { id: '2', name: 'Game 2' }, { id: '3', name: 'Game 3' }];
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <h1 className="text-2xl font-bold">New Game</h1>
      <div className="grid grid-cols-3 gap-4">
        {games.map((game) => (
          <div
            key={game.id}
            className="w-16 h-16 border flex items-center justify-center text-2xl cursor-pointer"
          >
            {game.name}
          </div>
        ))}
        </div>
    </div>
  );
}
