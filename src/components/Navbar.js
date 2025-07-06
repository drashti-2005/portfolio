'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { FaGithub, FaLinkedin, FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import Loading from './Loading';

const Navbar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();

  const navLinks = [
    { href: '/#about', label: 'About' },
    { href: '/#skills', label: 'Skills' },
    { href: '/#projects', label: 'Projects' },
    { href: '/#achievements', label: 'Achievements' },
    { href: '/#contact', label: 'Contact' },
  ];

  const handleNavClick = async (e, href) => {
    e.preventDefault();
    setIsLoading(true);
    if (pathname !== '/') {
      await router.push(href);
    } else {
      const element = document.querySelector(href.replace('/', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loading />}
      <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200">
              Drashti Pateliya
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="nav-link text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://github.com/drashti-2005"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-all duration-200"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/drashti-pateliya-314824324/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-all duration-200"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    handleNavClick(e, link.href);
                    setIsMenuOpen(false);
                  }}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center space-x-4 px-3 py-2">
                <a
                  href="https://github.com/drashti-2005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-all duration-200"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/drashti-pateliya-314824324/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-all duration-200"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;