import React from 'react';

const Resume: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <header className="mb-8 border-b pb-4">
        <h1 className="text-4xl font-bold">Ian Chapin</h1>
        <p className="mt-1 text-lg">
          <span>ianchapin@gmail.com</span> | <span>(816) 787-6075</span>
        </p>
      </header>

      {/* Professional Summary */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold border-b pb-2">Professional Summary</h2>
        <p className="mt-4">
          Dynamic and innovative software engineer with a proven track record in developing scalable and efficient software solutions. Expertise in full-stack development, with a strong foundation in C#, and a passion for emerging technologies. Demonstrated ability to lead projects and collaborate effectively with diverse teams. Seeking to leverage my technical skills and creative problem-solving abilities to drive impactful software development in a forward-thinking company.
        </p>
      </section>

      {/* Work Experience */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold border-b pb-2">Work Experience</h2>

        {/* Blue Cross and Blue Shield */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold">
            Blue Cross and Blue Shield of Kansas (Contract via TriCom Technical Services) – Topeka, KS
          </h3>
          <p className="italic text-gray-600">Application Security Developer | March 2024 – October 2024</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Set up multiple Okta applications, including Client Credentials and Authorization Code flows, enabling secure connections to Azure API Management endpoints.</li>
            <li>Implemented DPoP in Okta applications to mitigate token replay attacks.</li>
            <li>Developed an Azure Function integrated with VirusTotal.com's API to scan files for malware and enforced security policies.</li>
            <li>Resolved bugs and enhanced features in Azure Functions and web applications using C# and .NET.</li>
            <li>Established APIOps processes and designed build/release pipelines to streamline CI/CD practices.</li>
            <li>Integrated automated unit tests using xUnit and optimized endpoint configurations via Swagger documentation.</li>
            <li>Collaborated with product, security, and DevOps teams to ensure compliance and performance.</li>
            <li>Integrated Snyk security analysis into build pipelines as part of a DevSecOps strategy.</li>
            <li>Participated in Blue Team security simulation exercises and agile teams using Azure DevOps.</li>
          </ul>
        </div>

        {/* Aptora Corporation – Software Engineer & Scrum Master */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold">
            Aptora Corporation – Lenexa, KS
          </h3>
          <p className="italic text-gray-600">Software Engineer &amp; Scrum Master | February 2021 – December 2023</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Led the architectural transformation from VB6 to a microservice-oriented C# full-stack architecture.</li>
            <li>Integrated Blazor for the front end and .NET APIs (RESTful, JSON) for the backend on Azure.</li>
            <li>Utilized Azure Repos and Azure Pipelines for efficient CI/CD deployments.</li>
            <li>Provided technical leadership to in-house and offshore teams.</li>
            <li>Engineered an authentication and authorization framework using Duende Identity Server (OIDC &amp; OAuth2) with Role-Based Access Control (RBAC).</li>
          </ul>
        </div>

        {/* Aptora Corporation – Software Engineer */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold">Aptora Corporation</h3>
          <p className="italic text-gray-600">Software Engineer | February 2020 – February 2021</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Developed, tested, and maintained code for various applications including scheduling, dispatching, and chat.</li>
            <li>Collaborated on integrating key third-party platforms (Bing Maps, Twilio, SendGrid, Fleetmatics) while ensuring secure key management.</li>
            <li>Engineered a sophisticated 'Scheduling Wizard' to optimize appointment scheduling and dispatching processes.</li>
          </ul>
        </div>

        {/* MRIGlobal */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold">MRIGlobal – Kansas City, MO</h3>
          <p className="italic text-gray-600">Associate Software Engineer | January 2018 – February 2020</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Developed single-page applications for sensor data visualization on maps and various UI components.</li>
            <li>Collaborated on architecture, design, and code reviews; worked onsite with clients to ensure proper integration.</li>
            <li>Designed and implemented a custom command and control system for the NBCRV, meeting a challenging deadline.</li>
          </ul>
        </div>
      </section>

      {/* Highlighted Projects */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold border-b pb-2">Highlighted Projects</h2>

        {/* Total Office Manager Next Generation */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Total Office Manager Next Generation | December 2020 – December 2023</h3>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Transitioned to a modern C# tech stack with Blazor on the front end and ASP.NET Web API (with Entity Framework) on the backend.</li>
            <li>Received a company award for developing a code-generating tool that scaffolded boilerplate API code.</li>
            <li>Implemented token-based authentication with Duende Identity Server (OIDC &amp; OAuth2) and configured RBAC.</li>
            <li>Collaborated with subject matter experts to deliver high-quality features.</li>
            <li>Developed comprehensive CRUD pages for various office management operations.</li>
          </ul>
        </div>

        {/* Stryker NBCRV Sensor Suite Upgrade */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold">Stryker NBCRV Sensor Suite Upgrade | December 2019 – April 2020</h3>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Architected real-time communication infrastructure using SignalR.</li>
            <li>Developed a centralized UI for monitoring sensor operational statuses.</li>
            <li>Enabled a “Named Area of Interest” feature to guide multiple sensors.</li>
            <li>Simulated sensor data with a single-page application to accelerate development.</li>
            <li>
              Award:{" "}
              <a
                href="https://www.mriglobal.org/jpeo_award/"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                MRIGlobal Award
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold border-b pb-2">Skills</h2>
        <div className="mt-4 text-gray-700">
          <h3 className="text-xl font-semibold">Technologies</h3>
          <p className="mt-1">
            Web Development: .NET Framework, .NET Core, Blazor (WASM, Server), MAUI, React, NextJS, Node, Express, REST API, OData, Entity Framework, SignalR, Bootstrap, jQuery, KnockoutJS.
          </p>
          <h3 className="text-xl font-semibold mt-4">Development Tools &amp; Practices</h3>
          <p className="mt-1">
            Azure (Functions, DevOps, CI/CD Pipelines), Docker, Visual Studio, VSCode, Git, GitHub, Agile, Scrum, Vercel.
          </p>
          <h3 className="text-xl font-semibold mt-4">Testing &amp; Quality Assurance</h3>
          <p className="mt-1">xUnit, Moq.</p>
          <h3 className="text-xl font-semibold mt-4">Miscellaneous Technologies</h3>
          <p className="mt-1">Telerik, Newtonsoft, ChatGPT, OpenAI API.</p>
          <h3 className="text-xl font-semibold mt-4">Programming Languages</h3>
          <p className="mt-1">C#, Javascript, Python, HTML, CSS, SQL, T‑SQL.</p>
        </div>
      </section>

      {/* Certifications and Clearances */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold border-b pb-2">Certifications and Clearances</h2>
        <ul className="list-disc ml-6 mt-4 space-y-1 text-gray-700">
          <li>Department of Defense (DoD): Secret Security Clearance</li>
          <li>Scrum.org: Professional Scrum Master I (PSM I) Certification - Achieved on July 1, 2021</li>
        </ul>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold border-b pb-2">Education</h2>
        <div className="mt-4 text-gray-700">
          <h3 className="text-xl font-semibold">University of Central Missouri – Warrensburg, MO</h3>
          <p>Bachelor of Science in Computer Science - Software Development Option - Minor in Cybersecurity, May 2017</p>
          <p>GPA: 3.6 / 4.00</p>
          <h4 className="text-lg font-semibold mt-2">Key Courses Completed</h4>
          <ul className="list-disc ml-6 mt-1 space-y-1">
            <li>Software Engineering</li>
            <li>Algorithm Design &amp; Analysis</li>
            <li>Operating Systems</li>
            <li>Database Theory &amp; Applications</li>
            <li>Discrete Structures</li>
            <li>Client Side Web Programming</li>
            <li>Server Side Web Programming</li>
            <li>Application Programming in C# &amp; .NET</li>
            <li>Advanced Application Programming in Java</li>
            <li>Secure Programming</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Resume;
