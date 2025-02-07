import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center">
        {/* Introduction Text */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl font-bold mb-4">Hi, I&apos;m Ian Chapin!</h1>
          <p className="text-xl mb-6">
            I&apos;m a passionate software engineer dedicated to building innovative and scalable software solutions.
            With expertise in full-stack development and a keen interest in emerging technologies, I bring creative ideas to life.
            Explore my projects, check out my resume, or get in touch to learn more!
          </p>
          {/* Call to Action Button */}
          <Link href="/resume">
            <span className="inline-block px-8 py-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-colors duration-200">
              View Resume
            </span>
          </Link>
        </div>

        {/* Profile Image */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/images/ian.jpg"
            alt="Ian Chapin"
            width={300}
            height={300}
            className="rounded-full shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
