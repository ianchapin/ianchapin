import React from "react";
import SnakeGame from "../../../../components/SnakeGame";

const SnakePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-4 text-center text-white">
        <h1 className="text-3xl font-bold">Snake Game</h1>
        <a href="https://github.com/ianchapin/ianchapin/blob/master/components/SnakeGame.tsx" target="_blank">
          <span className="text-sm underline">
            View the code on GitHub
          </span>
        </a>
      </header>
      <main className="flex-grow flex items-center justify-center">
        <SnakeGame />
      </main>
    </div>
  );
};

export default SnakePage;
