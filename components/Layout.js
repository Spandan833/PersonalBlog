import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Github, Linkedin, Twitter } from "lucide-react";

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
            {/* Logo */}
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
                <a className="flex items-center">
                  <Image
                    src="/images/profilepic.jpg"
                    alt="Spandan's Blog Logo"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <span className="ml-2 text-xl font-bold text-gray-900">
                    Spandan's Blog
                  </span>
                </a>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={toggleMenu}
              >
                <span className="sr-only">Open menu</span>
                {isMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>

            {/* Desktop menu */}
            <nav className="hidden md:flex space-x-10">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/articles">Articles</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </nav>

            {/* Social icons */}
            <div className="hidden md:flex items-center justify-end md:flex-1 space-x-3 lg:w-0">
              <SocialIcon
                href="https://github.com/Spandan833"
                icon={<Github size={20} />}
              />
              <SocialIcon
                href="https://www.linkedin.com/in/spandan-sen-choudhury-533807182/"
                icon={<Linkedin size={20} />}
              />
              <SocialIcon
                href="https://twitter.com/Spandan833"
                icon={<X size={30} />}
              />
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <Image
                      src="/images/logo.png"
                      alt="Spandan's Blog Logo"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                      onClick={toggleMenu}
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    <NavLink href="/" mobile>
                      Home
                    </NavLink>
                    <NavLink href="/about" mobile>
                      About
                    </NavLink>
                    <NavLink href="/articles" mobile>
                      Articles
                    </NavLink>
                    <NavLink href="/contact" mobile>
                      Contact
                    </NavLink>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <p className="text-gray-300">
                Spandan's Blog - Exploring the intersection of RF Engineering
                and Web Development.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/">
                    <a className="text-gray-300 hover:text-white">Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a className="text-gray-300 hover:text-white">About</a>
                  </Link>
                </li>
                <li>
                  <Link href="/articles">
                    <a className="text-gray-300 hover:text-white">Articles</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a className="text-gray-300 hover:text-white">Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <SocialIcon
                  href="https://github.com/yourusername"
                  icon={<Github size={24} />}
                />
                <SocialIcon
                  href="https://linkedin.com/in/yourusername"
                  icon={<Linkedin size={24} />}
                />
                <SocialIcon
                  href="https://twitter.com/yourusername"
                  icon={<Twitter size={24} />}
                />
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-300">
            © {new Date().getFullYear()} Spandan's Blog. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

const NavLink = ({ href, children, mobile }) => (
  <Link href={href}>
    <a
      className={`text-base font-medium text-gray-500 hover:text-gray-900 ${
        mobile ? "block px-3 py-2 rounded-md text-base font-medium" : ""
      }`}
    >
      {children}
    </a>
  </Link>
);

const SocialIcon = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-gray-500"
  >
    {icon}
  </a>
);

export default Layout;
