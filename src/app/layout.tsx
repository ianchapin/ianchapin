// app/layout.tsx (or your corresponding layout file)
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ianchapin.com",
  description: "A personal website for Ian Chapin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen flex flex-col">
          {/* Top Navigation Bar */}
          <header className="bg-gray-800">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <div className="text-white text-xl font-bold">
                <Link href="/">
                  Ian Chapin
                </Link>
              </div>
              <nav>
                <ul className="flex space-x-6">
                  <li>
                    <Link
                      href="/"
                      className="text-gray-300 hover:text-white transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/projects"
                      className="text-gray-300 hover:text-white transition-colors">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/arcade"
                      className="text-gray-300 hover:text-white transition-colors">
                      Arcade
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/resume"
                      className="text-gray-300 hover:text-white transition-colors">
                      Resume
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-300 hover:text-white transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-grow">{children}</main>

          {/* Footer */}
          <footer className="bg-gray-800 text-gray-300 text-center py-4">
            &copy; {new Date().getFullYear()} Ian Chapin. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}