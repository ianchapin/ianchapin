import React from 'react';
import Link from 'next/link';

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/projects/asteroids">
            <span className="block rounded-lg shadow-lg p-6 bg-white border border-gray-200 hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                Asteroids Game
              </h2>
              <p className="text-gray-700">
                A classic space shooter game built with Next.js, TypeScript, and Canvas.
              </p>
            </span>
          </Link>
          <Link href="/projects/snake">
            <span className="block rounded-lg shadow-lg p-6 bg-white border border-gray-200 hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                Snake Game
              </h2>
              <p className="text-gray-700">
                A retro snake game built with Next.js, TypeScript, and Canvas.
              </p>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
