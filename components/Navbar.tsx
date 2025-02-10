import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center">
        {/* Site Title (Left) */}
        <div className="text-white text-xl font-bold">
          <Link href="/">Ian Chapin</Link>
        </div>

        {/* Navigation (Right) */}
        <nav className="flex-1 flex justify-end items-center">
          <ul className="flex space-x-6">
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
