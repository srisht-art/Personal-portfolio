import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="mb-8 bg-purple-600 hover:bg-purple-700 p-3 rounded-full transition-colors duration-300 transform hover:scale-110"
          >
            <ArrowUp size={20} />
          </button>

          {/* Logo/Name */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Shristi Khanna
            </h3>
            <p className="text-gray-400 mt-2">UI/UX Designer & CSE Student</p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            {['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Divider */}
          <div className="w-full h-px bg-gray-800 mb-6"></div>

          {/* Copyright and Credits */}
          <div className="flex flex-col sm:flex-row items-center justify-between w-full text-sm text-gray-400">
            <div className="flex items-center gap-2 mb-4 sm:mb-0">
              <span>© 2024 Shristi Khanna. Made with</span>
              <Heart size={16} className="text-red-400" />
              <span>and lots of creativity.</span>
            </div>
            
            <div className="text-center sm:text-right">
              <p>Designed & Developed with passion</p>
              <p className="text-xs mt-1">Last updated: January 2024</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;