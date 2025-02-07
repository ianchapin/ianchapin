// pages/contact.tsx
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <p className="text-lg">
        Feel free to reach out via email at{' '}
        <a href="mailto:ianchapin@gmail.com" className="text-blue-500 hover:text-blue-700">
          ianchapin@gmail.com
        </a>.
      </p>
    </div>
  );
};

export default Contact;
