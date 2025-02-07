import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* NBCRV Upgrade Card */}
          <Link href="/projects/stryker-nbcrv-upgrade">
            <span className="block bg-white shadow-md overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 ease-in-out">
              <div className="relative aspect-video">
                <Image
                  src="/images/nbcrv-preview.jpg"
                  alt="NBCRV Upgrade Thumbnail"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-3 text-gray-900">
                  NBCRV Upgrade
                </h2>
                <p className="text-gray-700">
                  A classic space shooter game built with Next.js, TypeScript, and Canvas.
                </p>
              </div>
            </span>
          </Link>

          {/* Scheduling Wizard Card */}
          <Link href="/projects/scheduling-wizard">
            <span className="block bg-white shadow-md overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 ease-in-out">
              <div className="relative aspect-video">
                <Image
                  src="/images/scheduling-wizard-preview.jpg"
                  alt="Scheduling Wizard Thumbnail"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-3 text-gray-900">
                  Scheduling Wizard
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

export default Projects;
