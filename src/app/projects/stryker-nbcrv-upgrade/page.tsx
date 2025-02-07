import React from 'react';

const NBCRVIntegration: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <header className="mb-8 pb-4">
        <h1 className="text-5xl font-bold">NBCRV Sensor Suite Upgrade</h1>
        <p className="mt-2 text-xl">
          Enhancing Real-Time CBRN Threat Detection & Sensor Integration
        </p>
      </header>

      {/* Overview */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold border-b pb-2">Overview</h2>
        <p className="mt-4">
          As a contributor to MRIGlobal’s Intelligence, Surveillance, and Reconnaissance (ISR) 
          software integration team, I played a key role in developing both the front-end and 
          back-end components of the Nuclear Biological Chemical Reconnaissance Vehicle (NBCRV) 
          sensor suite upgrade.
        </p>
        <p className="mt-2">
          My primary contributions included architecting the real-time communication system 
          using <strong>SignalR</strong>, building the user interface with <strong>Knockback.js</strong> 
          and <strong>D3.js</strong>, and working on the backend infrastructure with 
          <strong> ASP.NET MVC</strong> and <strong>Entity Framework</strong>. I also contributed 
          to database management and API development to ensure seamless sensor data integration.
        </p>
        <p className="mt-2">
          This project was recognized by the Joint Program Executive Office for Chemical, 
          Biological, Radiological, and Nuclear Defense (JPEO-CBRND) for its significant 
          contributions to national defense.
        </p>
      </section>

      {/* My Contributions */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold border-b pb-2">My Contributions</h2>
        <ul className="list-disc ml-6 mt-4 space-y-1">
          <li>
            <strong>Real-Time Data Architecture:</strong> Designed and implemented a SignalR-based 
            communication system for instant sensor data updates and event-driven interactions.
          </li>
          <li>
            <strong>Front-End Development:</strong> Built an interactive UI using Knockback.js 
            (Backbone.js + Knockout.js) for smooth data binding and dynamic user interactions.
          </li>
          <li>
            <strong>Data Visualization:</strong> Developed real-time geospatial mapping and 
            sensor data charts using D3.js to enhance situational awareness.
          </li>
          <li>
            <strong>Back-End Development:</strong> Contributed to API development and data processing 
            using ASP.NET MVC and Entity Framework.
          </li>
          <li>
            <strong>Database Management:</strong> Assisted with SQL database optimization and data 
            modeling to support large-scale sensor data storage and retrieval.
          </li>
          <li>
            <strong>System Performance Optimization:</strong> Tuned SignalR communication for 
            low-latency updates and efficient sensor data streaming.
          </li>
        </ul>
      </section>

      {/* Technologies Used */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold border-b pb-2">Technologies Used</h2>
        <ul className="list-disc ml-6 mt-4 space-y-1">
          <li><strong>SignalR:</strong> Implemented real-time communication for instant sensor updates.</li>
          <li><strong>Knockback.js:</strong> Used for front-end development, combining Knockout.js 
              and Backbone.js for a responsive UI.</li>
          <li><strong>D3.js:</strong> Created interactive data visualizations and real-time 
              geospatial mapping.</li>
          <li><strong>ASP.NET MVC:</strong> Developed the back-end architecture and API endpoints.</li>
          <li><strong>Entity Framework:</strong> Managed database interactions and optimized data queries.</li>
          <li><strong>SQL Server:</strong> Designed and optimized database schemas for large-scale sensor data storage.</li>
        </ul>
      </section>

      {/* Challenges & Solutions */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold border-b pb-2">Challenges & Solutions</h2>
        <ul className="list-disc ml-6 mt-4 space-y-1">
          <li>
            <strong>Handling Large Real-Time Data Streams:</strong> Optimized SignalR communication 
            and fine-tuned SQL queries for fast data retrieval.
          </li>
          <li>
            <strong>Creating an Intuitive UI for Operators:</strong> Designed a Knockback.js-powered 
            interface that simplified real-time data monitoring while maintaining responsiveness.
          </li>
          <li>
            <strong>Ensuring High-Performance Data Visualization:</strong> Used D3.js to create 
            efficient, scalable charts and mapping elements for dynamic threat tracking.
          </li>
          <li>
            <strong>Maintaining a Scalable Backend:</strong> Leveraged ASP.NET MVC and Entity Framework 
            to create a modular system capable of integrating future sensor upgrades.
          </li>
        </ul>
      </section>

      {/* Project Impact */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold border-b pb-2">Project Impact</h2>
        <ul className="list-disc ml-6 mt-4 space-y-1">
          <li>Enabled real-time sensor data streaming, reducing response times for threat detection.</li>
          <li>Provided a modular and scalable architecture for future sensor integrations.</li>
          <li>Enhanced operator situational awareness with intuitive UI and real-time mapping features.</li>
          <li>Recognized by JPEO-CBRND for advancing CBRN defense technology.</li>
        </ul>
      </section>

      {/* Learn More */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold border-b pb-2">Learn More</h2>
        <p className="mt-4">
          For additional details, visit the{' '}
          <a
            href="https://www.mriglobal.org/jpeo_award/"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            official MRIGlobal announcement
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default NBCRVIntegration;
