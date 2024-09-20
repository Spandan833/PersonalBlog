import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-violet-300 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center items-center py-4 relative">
          <div className="hidden md:flex space-x-20">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/articles">All articles</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
          <div className="md:hidden absolute right-4">
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
    legacyBehavior>
    {children}
  </Link>
);

export default Navbar;
