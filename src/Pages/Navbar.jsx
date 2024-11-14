import React, { useState, useEffect } from 'react';
import logo from '../assets/newLogo4.png'; // Adjust the path based on your project structure
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa'; // Import the WhatsApp icon from React Icons

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setIsMenuOpen(false); // Close menu when link is clicked on mobile
  };

  return (
    <>
      {/* Floating WhatsApp Icon (Fixed at bottom-right corner) */}
      <div className="fixed bottom-4 right-4 z-50 bg-green-500 text-white rounded-full p-3 shadow-lg cursor-pointer">
        <a href={`https://wa.me/8622002100`} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="w-6 h-6" />
        </a>
      </div>

      {/* Navbar */}
      <nav
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen
          ? 'bg-white shadow-md'
          : 'bg-transparent'
          }`}
      >
        <div className="container mx-auto flex items-center justify-between py-3 px-6 md:px-10">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Logo"
              className={`h-12 w-12 transition-all duration-300 ${isScrolled ? 'h-10 w-10' : 'h-12 w-12'}`}
            />
          </Link>

          {/* Hamburger Menu Button */}
          <button
            className="md:hidden flex items-center focus:outline-none"
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Navigation Links */}
          <div
            className={`md:flex items-center space-x-4 text-xl ${isMenuOpen
              ? 'flex flex-col items-center justify-center absolute bg-white top-16 left-0 right-0 shadow-md py-4 md:py-0'
              : 'hidden md:flex'
              } ${isMenuOpen ? 'bg-white' : 'bg-transparent md:bg-transparent'}`} // Apply bg-white when menu is open
          >
            {['home', 'about', 'services', 'career', 'contact'].map((link) => (
              <Link
                key={link}
                to={`/${link === 'home' ? '' : link}`}
                onClick={() => handleLinkClick(link)}
                className={`relative group font-bold px-4 py-2 transition-all duration-300 ${isScrolled
                  ? activeLink === link
                    ? 'text-blue-600'
                    : 'text-gray-700'
                  : activeLink === link
                    ? 'text-blue-600'
                    : 'text-white'
                  }`}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
                <span
                  className={`absolute left-0 bottom-0 w-0 h-1 ${isScrolled ? 'bg-blue-600' : 'bg-white'
                    } group-hover:w-full transition-all duration-300`}
                ></span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
