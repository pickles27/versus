'use client';

export default function TicTacToeBoard() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Tic Tac Toe</h1>
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 9 }, (_, index) => (
          <div
            key={index}
            className="w-16 h-16 border flex items-center justify-center text-2xl cursor-pointer"
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}