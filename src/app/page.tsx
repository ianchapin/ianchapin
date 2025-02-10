import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      {/* Hero Section */}
      <div className="relative flex flex-col md:flex-row items-center p-12 shadow-lg">
        {/* Text Content */}
        <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-5xl font-extrabold mb-4 animate-fade-in">
            Hi, I&apos;m Ian Chapin!
          </h1>
          <p className="text-xl mb-6">
            A passionate software engineer dedicated to building innovative and scalable software solutions.
            With expertise in full-stack development and a keen interest in emerging technologies, I bring creative ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/resume">
              <span className="px-6 py-3 bg-white border text-blue-600 font-semibold shadow-md hover:bg-gray-100 transition duration-200 cursor-pointer">
                View Resume
              </span>
            </Link>
            <a
              href="https://www.linkedin.com/in/ianchapin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="px-6 py-3 bg-white border text-blue-600 font-semibold shadow-md hover:bg-gray-100 transition duration-200">
                LinkedIn
              </span>
            </a>
            <a
              href="https://www.youtube.com/@ianchapin6043"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="px-6 py-3 bg-white border text-blue-600 font-semibold shadow-md hover:bg-gray-100 transition duration-200">
                YouTube
              </span>
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/images/ian.jpg"
            alt="Ian Chapin"
            width={300}
            height={300}
            className="rounded-full shadow-lg border-4 border-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
