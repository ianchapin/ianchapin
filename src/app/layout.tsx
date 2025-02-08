import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "../../components/Navbar"; // Adjust the path as needed
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
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
      <head>
        {/* Ensure responsive scaling on mobile devices */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <div className="min-h-screen flex flex-col">
          {/* Navigation */}
          <Navbar />

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
