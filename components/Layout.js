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
