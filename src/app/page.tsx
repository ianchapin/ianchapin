// pages/index.tsx
import React from 'react';
import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center">
        {/* Introduction Text */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl font-bold mb-4">Hi, I'm Ian Chapin!</h1>
          <p className="text-xl">
            I'm a passionate software engineer dedicated to building innovative and scalable software solutions.
            With expertise in full-stack development and a keen interest in emerging technologies, I bring creative ideas to life.
            Explore my projects, check out my resume, or get in touch to learn more!
          </p>
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
