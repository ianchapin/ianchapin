"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Site Title */}
        <div className="text-white text-xl font-bold">
          <Link href="/">Ian Chapin</Link>
        </div>
        <nav className="flex items-center">
          {/* Hamburger Button for Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-300 md:hidden focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? (
              // Close Icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link
                href="/projects"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/arcade"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Arcade
              </Link>
            </li>
            <li>
              <Link
                href="/resume"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* Mobile Navigation Menu */}
      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
    </header>
  );
};

interface MobileMenuProps {
  onClose: () => void;
}

const MobileMenu = ({ onClose }: MobileMenuProps) => {
  return (
    <div className="md:hidden">
      <ul className="px-4 pt-2 pb-4 space-y-2">
        <li>
          <Link
            href="/projects"
            className="block text-gray-300 hover:text-white transition-colors"
            onClick={onClose}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/arcade"
            className="block text-gray-300 hover:text-white transition-colors"
            onClick={onClose}
          >
            Arcade
          </Link>
        </li>
        <li>
          <Link
            href="/resume"
            className="block text-gray-300 hover:text-white transition-colors"
            onClick={onClose}
          >
            Resume
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="block text-gray-300 hover:text-white transition-colors"
            onClick={onClose}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
