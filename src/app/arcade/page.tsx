import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Arcade: React.FC = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          Arcade
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Asteroids Card */}
          <Link href="/arcade/asteroids">
            <span className="block bg-white shadow-md overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 ease-in-out">
              <div className="relative aspect-video">
                <Image
                  src="/images/asteroids-preview.png"
                  alt="Asteroids Game Thumbnail"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-3 text-gray-900">
                  Asteroids
                </h2>
                <p className="text-gray-700">
                  A classic space shooter game built with Next.js, TypeScript, and Canvas.
                </p>
              </div>
            </span>
          </Link>

          {/* Snake Card */}
          <Link href="/arcade/snake">
            <span className="block bg-white shadow-md overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 ease-in-out">
              <div className="relative aspect-video">
                <Image
                  src="/images/snake-preview.png"
                  alt="Snake Game Thumbnail"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-3 text-gray-900">
                  Snake
                </h2>
                <p className="text-gray-700">
                  A retro snake game built with Next.js, TypeScript, and Canvas.
                </p>
              </div>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Arcade;
