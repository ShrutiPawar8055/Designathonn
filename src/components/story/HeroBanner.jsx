import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import indiaImg from '../../assets/ui/india2.png';

const HeroBanner = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "linear" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={indiaImg} 
          alt="The soul of India"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content: Explore India Button at bottom-right */}
      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-end pb-16">
        <motion.div 
          initial={{ opacity: 0, x: 20, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-end"
        >
          <Link to="/collections" className="group relative px-10 py-5 bg-white/15 backdrop-blur-xl text-white font-bold rounded-full overflow-hidden transition-all hover:bg-white hover:text-black hover:pr-14 border border-white/30 shadow-2xl">
            <span className="relative z-10 flex items-center space-x-3">
              <span className="tracking-widest">EXPLORE INDIA</span>
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBanner;
