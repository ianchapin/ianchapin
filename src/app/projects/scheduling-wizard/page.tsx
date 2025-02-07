import React from 'react';

const SchedulingWizard: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <header className="mb-8 pb-4">
        <h1 className="text-5xl font-bold">Scheduling Wizard</h1>
        <p className="mt-2 text-xl">Optimizing Appointment Scheduling &amp; Dispatching</p>
      </header>

      {/* Overview */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold border-b pb-2">Overview</h2>
        <p className="mt-4">
          As the lead designer on the Scheduling Wizard project, I drove the requirements gathering process and crafted an intuitive user interface that transformed a complex scheduling task into a streamlined, desktop-based solution. Developed as a Windows Presentation Foundation (WPF) application, this feature is a key component of Aptora Corporation’s Total Office Manager suite.
        </p>
        <p className="mt-2">
          For detailed usage instructions, please visit the{' '}
          <a
            href="https://www.aptora.com/help/how-to-use-the-scheduling-wizard?srsltid=AfmBOorGQbZ1sh2_CDNxNAweaEtwigMRidFRdeKMA3ATMfi4kaXIubsE"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            How to Use the Scheduling Wizard
          </a>{' '}
          help page.
        </p>
      </section>

      {/* Key Contributions */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold border-b pb-2">Key Contributions</h2>
        <ul className="list-disc ml-6 mt-4 space-y-1">
          <li>
            <strong>Requirements Gathering:</strong> Led stakeholder interviews and user research to define clear, actionable requirements.
          </li>
          <li>
            <strong>User Interface Design:</strong> Crafted a clean, intuitive desktop UI that guides users through each step, reducing errors and simplifying complex scheduling tasks.
          </li>
          <li>
            <strong>WPF Implementation:</strong> Developed the Scheduling Wizard as a robust WPF application, ensuring a seamless desktop experience.
          </li>
          <li>
            <strong>Chart Development:</strong> Designed and implemented interactive charts—featured on the help page—to visualize scheduling metrics and enhance user understanding.
          </li>
          <li>
            <strong>API Integrations:</strong> Integrated the Bing Maps API for precise location mapping and the Fleetmatics API for advanced dispatch and route optimization.
          </li>
          <li>
            <strong>Guided Workflow:</strong> Implemented step-by-step prompts to ensure a smooth, efficient scheduling experience.
          </li>
          <li>
            <strong>Real-Time Scheduling:</strong> Developed dynamic updates and conflict detection to maintain seamless dispatch operations.
          </li>
        </ul>
      </section>

      {/* Technologies & Methodologies */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold border-b pb-2">Technologies &amp; Methodologies</h2>
        <p className="mt-4">
          Developed using C# and .NET, the Scheduling Wizard leverages agile methodologies for continuous feedback and iterative improvements. I established secure API integrations with the Bing Maps API for location mapping and the Fleetmatics API for enhanced dispatch capabilities—all within a robust WPF framework.
        </p>
      </section>

      {/* Challenges & Solutions */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold border-b pb-2">Challenges &amp; Solutions</h2>
        <ul className="list-disc ml-6 mt-4 space-y-1">
          <li>
            <strong>Complex Dispatching Logic:</strong> Collaborated with cross-functional teams to design algorithms capable of handling real-time updates and avoiding scheduling conflicts.
          </li>
          <li>
            <strong>Multiple Integrations:</strong> Spearheaded the integration of secure API connections with the Bing Maps API and the Fleetmatics API to enhance dispatch capabilities.
          </li>
          <li>
            <strong>User Experience:</strong> Leveraged user feedback and iterative design processes to balance rich functionality with an accessible desktop interface.
          </li>
        </ul>
      </section>

      {/* Impact & Outcomes */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold border-b pb-2">Impact &amp; Outcomes</h2>
        <ul className="list-disc ml-6 mt-4 space-y-1">
          <li>Enhanced operational efficiency by significantly reducing manual errors and setup times.</li>
          <li>Improved user satisfaction with an interface that simplifies complex scheduling tasks.</li>
          <li>Established a scalable design framework, ready for future feature integrations and enhancements.</li>
        </ul>
      </section>
    </div>
  );
};

export default SchedulingWizard;
