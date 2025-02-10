import React from 'react';

const TotalOfficeManager360: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <header className="mb-8 pb-4">
        <h1 className="text-5xl font-bold">Total Office Manager 360</h1>
        <p className="mt-2 text-xl">
          Revolutionizing Enterprise Office Management
        </p>
      </header>

      {/* Overview */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold border-b pb-2">Overview</h2>
        <p className="mt-4">
          Total Office Manager 360 is an all-in-one solution that integrates enterprise accounting, payroll, job costing, service agreements, work orders, field scheduling, dispatching, and inventory management into a single cohesive platform.
        </p>
        <p className="mt-2">
          I played a pivotal role in transitioning the legacy system to a modern C# tech stack. The front-end was rebuilt using <strong>Blazor</strong>, while the back-end was developed using <strong>ASP.NET Web API</strong> to perform CRUD operations on a SQL database via <strong>Entity Framework</strong>.
        </p>
        <p className="mt-2">
          The project earned a company award for the innovative code generation tool I developed, which scaffolded extensive boilerplate code for the back-end API, significantly reducing development time.
        </p>
      </section>

      {/* My Contributions */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold border-b pb-2">My Contributions</h2>
        <ul className="list-disc ml-6 mt-4 space-y-1">
          <li>
            <strong>Modernization:</strong> Led the migration to a modern C# tech stack, leveraging Blazor for the front-end and ASP.NET Web API for robust back-end services.
          </li>
          <li>
            <strong>Automation Tool Development:</strong> Created a code generating tool that automated the scaffolding of boilerplate code, saving valuable development time.
          </li>
          <li>
            <strong>Enhanced Security:</strong> Implemented token-based authentication with Duende Identity Server (OIDC & OAUTH2) and configured Role-Based Access Control (RBAC) to ensure secure user management.
          </li>
          <li>
            <strong>CRUD Operations:</strong> Developed comprehensive lists and CRUD pages for various office management operations.
          </li>
          <li>
            <strong>Collaboration:</strong> Worked closely with subject matter experts to ensure the delivery of high-quality and accurate features.
          </li>
        </ul>
      </section>

      {/* Technologies Used */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold border-b pb-2">Technologies Used</h2>
        <ul className="list-disc ml-6 mt-4 space-y-1">
          <li><strong>C# & Blazor:</strong> Utilized for building a modern and interactive front-end.</li>
          <li><strong>ASP.NET Web API:</strong> Developed robust back-end services to handle business logic and CRUD operations.</li>
          <li><strong>Entity Framework:</strong> Managed SQL database interactions and optimized data queries.</li>
          <li><strong>Duende Identity Server:</strong> Implemented token-based authentication (OIDC & OAUTH2) and Role-Based Access Control (RBAC) for enhanced security.</li>
          <li><strong>SQL Server:</strong> Ensured efficient data storage and retrieval for enterprise operations.</li>
        </ul>
      </section>

      {/* Challenges & Solutions */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold border-b pb-2">Challenges & Solutions</h2>
        <ul className="list-disc ml-6 mt-4 space-y-1">
          <li>
            <strong>Modernizing Legacy Systems:</strong> Successfully migrated from an outdated system to a modern tech stack with minimal disruption.
          </li>
          <li>
            <strong>Reducing Boilerplate Code:</strong> Developed a code generation tool that automated repetitive coding tasks, significantly streamlining the development process.
          </li>
          <li>
            <strong>Ensuring Secure Access:</strong> Implemented advanced authentication and RBAC strategies to protect sensitive enterprise data.
          </li>
          <li>
            <strong>Delivering User-Friendly CRUD Interfaces:</strong> Designed intuitive pages to manage diverse office management operations efficiently.
          </li>
        </ul>
      </section>

      {/* Project Impact */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold border-b pb-2">Project Impact</h2>
        <ul className="list-disc ml-6 mt-4 space-y-1">
          <li>Simplified complex enterprise operations by consolidating multiple systems into a unified platform.</li>
          <li>Significantly reduced development time with an innovative code generation tool.</li>
          <li>Enhanced overall system security with robust authentication and access control mechanisms.</li>
          <li>Delivered a scalable and maintainable solution that modernized office management processes.</li>
        </ul>
      </section>

      {/* Learn More */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold border-b pb-2">Learn More</h2>
        <p className="mt-4">
          To learn more about Total Office Manager 360 and its role in modernizing enterprise office management, feel free to reach out or explore further documentation.
        </p>
      </section>
    </div>
  );
};

export default TotalOfficeManager360;
