import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Site Title */}
        <div className="text-white text-xl font-bold">
          <Link href="/">Ian Chapin</Link>
        </div>
        <nav className="flex items-center">
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
    </header>
  );
};

export default Navbar;
