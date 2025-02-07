import React from "react";
import AsteroidsGame from "../../../../components/AsteroidsGame";
import Link from "next/link";

const AsteroidsPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-4 text-center text-white">
        <h1 className="text-3xl font-bold">Asteroids Game</h1>
        <a href="https://github.com/ianchapin/ianchapin/blob/master/components/AsteroidsGame.tsx" target="_blank">
          <span className="text-sm underline">
            View the code on GitHub
          </span>
        </a>
      </header>
      <main className="flex-grow flex items-center justify-center">
        <AsteroidsGame />
      </main>
    </div>
  );
};

export default AsteroidsPage;
