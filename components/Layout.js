import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
const SimpleLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />
      {/* Header with Image */}
      <header className="bg-inherit shadow-sm px-4 py-6">
        <div className="max-w-6xl mx-auto flex justify-center items-center">
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
            <p className="text-3xl font-bold text-gray-800">
              Hello, I am Spandan - an RF engineer
            </p>
            <p className="text-3xl font-bold text-gray-800">
              Welcome to my blog
            </p>
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
