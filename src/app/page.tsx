import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      {/* Hero Section */}
      <div className="relative flex flex-col md:flex-row items-center bg-gradient-to-r bg-white text-black p-12 shadow-lg">
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
              <span className="px-6 py-3 bg-white border text-blue-600 font-semibold shadow-md hover:bg-gray-100 transition duration-200">
                View Resume
              </span>
            </Link>
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

      {/* Freelance Services Section */}
      <div className="mt-16 text-center">
        <h2 className="text-4xl font-bold mb-8">What I Offer</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          
          {/* Software Consulting Card */}
          <div className="bg-white p-6 shadow-lg flex flex-col items-center text-center w-full md:w-1/3 border border-gray-200 hover:shadow-2xl transition duration-300">
            <div className="text-blue-600 text-6xl mb-4">💼</div>
            <h3 className="text-2xl font-semibold text-gray-900">Software Consulting</h3>
            <p className="text-gray-600 mt-2">
              I provide expert software consulting services to help businesses optimize their software architecture, improve development processes, and solve complex technical challenges.
            </p>
          </div>


          {/* Web Development for Small Businesses Card */}
          <div className="bg-white p-6 shadow-lg flex flex-col items-center text-center w-full md:w-1/3 border border-gray-200 hover:shadow-2xl transition duration-300">
            <div className="text-green-500 text-6xl mb-4">💻</div>
            <h3 className="text-2xl font-semibold text-gray-900">Web Development</h3>
            <p className="text-gray-600 mt-2">
              I create stunning, responsive websites for small businesses, ensuring their online presence stands out.
            </p>
          </div>
          
        </div>

        {/* Contact Section */}
        <div className="mt-12">
          <p className="text-xl">
            Interested in working together? Let’s discuss your project!
          </p>
          <Link href="/contact">
            <span className="mt-4 inline-block px-8 py-4 bg-purple-600 font-semibold shadow-md hover:bg-purple-700 transition duration-200">
              Get in Touch
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
