import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
const SimpleLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 font-mono">
      {/* Navbar */}
      <Navbar />
      {/* Header with Image */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-8 flex items-center">
          <div className="mr-12">
            {" "}
            {/* Increased margin-right here */}
            <Image
              src="/images/profilepic.jpg"
              alt="Spandan Sen Choudhury"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Spandan Sen Choudhury
            </h1>
            <p className="text-gray-600">Welcome to my personal blog</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-gray-600">
          © 2024 Spandan's Blog. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default SimpleLayout;
