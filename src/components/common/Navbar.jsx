import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Packages', path: '/combos' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-xl py-3 border-b border-amber-100' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-luxury px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg luxury-border">
              <span className="text-white font-bold text-lg font-cinzel">E</span>
            </div>
            <div>
              <h1 className="font-cinzel text-2xl font-bold text-amber-900">Élégant</h1>
              <p className="text-xs text-amber-600 -mt-1 font-inter">Events</p>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative font-cinzel font-medium transition-all duration-300 text-sm uppercase tracking-wider ${
                  location.pathname === item.path
                    ? 'text-amber-600'
                    : 'text-gray-700 hover:text-amber-500'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-0 w-full h-0.5 bg-amber-500"
                  />
                )}
              </Link>
            ))}
            
            {/* Contact Info */}
            <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-amber-200">
              <FiPhone className="text-amber-600" />
              <span className="text-amber-700 font-semibold">+1 (555) 123-4567</span>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="luxury-button px-8 py-3 rounded-full text-white font-semibold text-sm uppercase tracking-wider shadow-lg"
            >
              Book Consultation
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-amber-900 text-2xl p-2"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg shadow-xl border-b border-amber-100 py-4"
          >
            <div className="flex flex-col space-y-4 px-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`py-3 font-cinzel text-sm uppercase tracking-wider border-b border-amber-50 ${
                    location.pathname === item.path
                      ? 'text-amber-600 border-amber-200'
                      : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-amber-100">
                <div className="flex items-center space-x-2 text-amber-700 mb-4">
                  <FiPhone />
                  <span className="font-semibold">+1 (555) 123-4567</span>
                </div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="w-full luxury-button py-3 rounded-full text-white font-semibold text-sm uppercase tracking-wider"
                >
                  Book Consultation
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;