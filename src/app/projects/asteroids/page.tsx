import React from "react";
import AsteroidsGame from "../../../../components/AsteroidsGame";

const AsteroidsPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-4 text-center text-white">
        <h1 className="text-3xl font-bold">Asteroids Game</h1>
        <p className="text-sm">
          TODO
        </p>
      </header>
      <main className="flex-grow flex items-center justify-center">
        <AsteroidsGame />
      </main>
    </div>
  );
};

export default AsteroidsPage;
