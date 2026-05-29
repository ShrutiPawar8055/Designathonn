import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, Headset, Menu, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import ThemeToggle from '../ui/ThemeToggle';
import LanguageSelector from '../ui/LanguageSelector';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Stories', path: '/stories' },
    { name: 'Collections', path: '/collections' },
    { name: 'AI Guide', path: '/ai-guide' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4">
      <div className="container mx-auto px-6">
        <div className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 dark:bg-black/80 backdrop-blur-xl shadow-lg' 
            : 'bg-white/70 dark:bg-black/60 backdrop-blur-md'
        }`}>
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <span className="font-heading text-2xl tracking-[0.15em] font-black text-black dark:text-white group-hover:opacity-70 transition-opacity">REVERIE</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`ui-label text-[11px] tracking-[0.15em] hover:text-heritage-light dark:hover:text-heritage-dark transition-colors font-medium ${
                  location.pathname === link.path ? 'text-heritage-light dark:text-heritage-dark' : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                {link.name.toUpperCase()}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors p-2">
              <Search size={18} />
            </button>
            <button className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors p-2">
              <Headset size={18} />
            </button>
            <div className="flex items-center space-x-3 pl-4 border-l border-gray-200 dark:border-gray-700">
              <LanguageSelector />
              <ThemeToggle />
              <button className="w-9 h-9 rounded-full overflow-hidden border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
              </button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-gray-800 dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-3 mx-6 bg-white dark:bg-black/90 backdrop-blur-xl rounded-3xl border border-gray-100 dark:border-gray-800 shadow-xl overflow-hidden"
          >
            <div className="p-6 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className="ui-label text-sm text-gray-700 dark:text-gray-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-gray-100 dark:border-gray-800 flex items-center space-x-6">
                <LanguageSelector />
                <ThemeToggle />
                <Search size={20} className="text-gray-500 dark:text-gray-400" />
                <Headset size={20} className="text-gray-500 dark:text-gray-400" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
