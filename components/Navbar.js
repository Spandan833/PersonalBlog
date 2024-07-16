import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <header className="bg-inherit shadow-sm">
              <div className="max-w-2xl mx-auto flex items-center">
                <div className="mr-12">
                  {" "}
                  {/* Increased margin-right here */}
                  <Image
                    src="/images/profilepic.jpg"
                    alt="Spandan Sen Choudhury"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-800">
                    Hello! I am Spandan
                  </p>
                  <p className="text-gray-600 font-bold">
                    Welcome to my personal blog
                  </p>
                </div>
              </div>
            </header>
          </div>
          <div className="hidden md:flex space-x-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink href="/" mobile>
              Home
            </NavLink>
            <NavLink href="/about" mobile>
              About
            </NavLink>
            <NavLink href="/blog" mobile>
              Blog
            </NavLink>
            <NavLink href="/contact" mobile>
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children, mobile }) => (
  <Link
    href={href}
    className={`${
      mobile
        ? "block text-white hover:bg-purple-700 hover:text-purple-200 px-3 py-2 rounded-md text-base font-medium"
        : "text-white hover:bg-purple-700 hover:text-purple-200 px-3 py-2 rounded-md text-sm font-medium"
    }`}
  >
    {children}
  </Link>
);

export default Navbar;
