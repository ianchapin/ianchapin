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
                  Integrated software for the Nuclear Biological Chemical Reconnaissance Vehicle within a tight timeline.
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
                  Developed an automated scheduling solution that greatly enhanced dispatch efficiency in the field service industry.
                </p>
              </div>
            </span>
          </Link>

          {/* Total Office Manager 360 Card */}
          <Link href="/projects/total-office-manager">
            <span className="block bg-white shadow-md overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 ease-in-out">
              <div className="relative aspect-video">
                <Image
                  src="/images/total-office-manager-preview.webp"
                  alt="Total Office Manager Thumbnail"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-3 text-gray-900">
                  Total Office Manager
                </h2>
                <p className="text-gray-700">
                  Developed a comprehensive office management platform that automated scheduling, integrated accounting and payroll, and optimized field dispatching—dramatically enhancing operational efficiency in the field service industry.
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
