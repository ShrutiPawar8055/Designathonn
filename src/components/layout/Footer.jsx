import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-surface-light dark:bg-surface-dark border-t border-border/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex flex-col group mb-6">
              <span className="font-heading text-2xl tracking-widest font-bold text-heritage-light dark:text-heritage-dark">REVERIE</span>
              <span className="ui-label text-[10px] mt-[-2px] opacity-70">Every place remembers.</span>
            </Link>
            <p className="body-text text-sm opacity-60 max-w-xs">
              An AI-powered cinematic storytelling companion. We help you hear the soul of every place you visit.
            </p>
          </div>
          
          <div>
            <h4 className="ui-label mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><Link to="/spiritual" className="body-text text-sm hover:text-accent-light transition-colors">Spiritual Journeys</Link></li>
              <li><Link to="/historical" className="body-text text-sm hover:text-accent-light transition-colors">Historical Sites</Link></li>
              <li><Link to="/mythology" className="body-text text-sm hover:text-accent-light transition-colors">Mythology Tours</Link></li>
              <li><Link to="/architecture" className="body-text text-sm hover:text-accent-light transition-colors">Architectural Wonders</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="ui-label mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="body-text text-sm hover:text-accent-light transition-colors">Our Story</Link></li>
              <li><Link to="/methodology" className="body-text text-sm hover:text-accent-light transition-colors">Methodology</Link></li>
              <li><Link to="/careers" className="body-text text-sm hover:text-accent-light transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="body-text text-sm hover:text-accent-light transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="ui-label mb-6">Subscribe</h4>
            <p className="body-text text-sm opacity-60 mb-4">Join our community of explorers.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-background-light dark:bg-background-dark border border-border/20 px-4 py-2 text-sm w-full focus:outline-none focus:border-accent-light"
              />
              <button className="bg-heritage-light dark:bg-heritage-dark text-white px-4 py-2 text-sm uppercase tracking-wider font-bold">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-border/10">
          <p className="ui-label text-[10px] opacity-40">© 2026 REVERIE. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="ui-label text-[10px] opacity-40 hover:opacity-100 transition-opacity">Privacy Policy</Link>
            <Link to="/terms" className="ui-label text-[10px] opacity-40 hover:opacity-100 transition-opacity">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
