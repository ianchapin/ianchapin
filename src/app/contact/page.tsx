"use client"

import React, { useState, useEffect } from 'react';

const Contact: React.FC = () => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Split your email into parts and combine them
    const user = 'ianchapin';
    const domain = 'gmail.com';
    setEmail(`${user}@${domain}`);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <p className="text-lg">
        Feel free to reach out via email at{' '}
        <a href={`mailto:${email}`} className="text-blue-500 hover:text-blue-700">
          {email}
        </a>.
      </p>
    </div>
  );
};

export default Contact;
