import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-amber-900 to-amber-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container-luxury px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-amber-900 font-bold text-lg font-cinzel">E</span>
              </div>
              <div>
                <h2 className="font-cinzel text-2xl font-bold">Élégant</h2>
                <p className="text-amber-200 text-sm">Events</p>
              </div>
            </div>
            <p className="text-amber-100 mb-6 leading-relaxed">
              Creating unforgettable moments with luxury event planning and execution. 
              We transform your vision into breathtaking reality.
            </p>
            <div className="flex space-x-4">
              {[FiInstagram, FiFacebook, FiTwitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="#"
                  className="w-10 h-10 bg-amber-700 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors duration-300"
                >
                  <Icon className="text-amber-100" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-cinzel text-xl font-bold mb-6 text-amber-50">Quick Links</h3>
            <div className="space-y-3">
              {['Home', 'Gallery', 'Packages', 'About', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                  className="block text-amber-100 hover:text-white transition-colors duration-300 hover:translate-x-2 transform"
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-cinzel text-xl font-bold mb-6 text-amber-50">Our Services</h3>
            <div className="space-y-3">
              {['Wedding Planning', 'Corporate Events', 'Birthday Parties', 'Anniversary Celebrations', 'Private Events'].map((service) => (
                <span key={service} className="block text-amber-100 hover:text-white transition-colors duration-300 cursor-pointer">
                  {service}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-cinzel text-xl font-bold mb-6 text-amber-50">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FiMapPin className="text-amber-300 flex-shrink-0" />
                <span className="text-amber-100">123 Luxury Avenue, Premium City, PC 10001</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiPhone className="text-amber-300 flex-shrink-0" />
                <span className="text-amber-100">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiMail className="text-amber-300 flex-shrink-0" />
                <span className="text-amber-100">info@elegantevents.com</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="border-t border-amber-700 mt-12 pt-8 text-center"
        >
          <p className="text-amber-200">
            © {currentYear} Élégant Events. All rights reserved. | Crafted with ❤️ for unforgettable moments
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;