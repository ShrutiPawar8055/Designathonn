import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import { motion } from 'framer-motion';
import { places } from '../data/places';
import { Link } from 'react-router-dom';
import { Sparkles, History, Landmark, Compass } from 'lucide-react';

const Collections = () => {
  const categories = [
    { 
      name: 'Spiritual', 
      icon: <Sparkles className="text-accent-light" />, 
      desc: 'Sacred journeys and divine connections.',
      count: places.filter(p => p.category === 'Spiritual').length
    },
    { 
      name: 'Historic', 
      icon: <History className="text-accent-light" />, 
      desc: 'Architectural marvels and ancient legacies.',
      count: places.filter(p => p.category === 'Historic').length
    },
    { 
      name: 'Mythological', 
      icon: <Landmark className="text-accent-light" />, 
      desc: 'Where legends and reality intertwine.',
      count: 0 // Placeholder
    },
    { 
      name: 'Coastal', 
      icon: <Compass className="text-accent-light" />, 
      desc: 'Maritime stories and sea-side wonders.',
      count: 0 // Placeholder
    }
  ];

  return (
    <PageWrapper>
      <section className="pt-40 pb-24 bg-background-light dark:bg-background-dark min-h-screen">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-20">
            <p className="ui-label text-accent-light dark:text-accent-dark mb-6 tracking-[0.2em]">CURATED ARCHIVES</p>
            <h1 className="display-h1 mb-8">Collections</h1>
            <p className="body-text opacity-70">
              Discover India's heritage through thematic journeys. Each collection is a curated archive of stories, myths, and historical milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group bg-surface-light dark:bg-surface-dark border border-border/10 rounded-[2.5rem] p-10 shadow-sm hover:shadow-2xl transition-all cursor-pointer overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-heritage-light/5 rounded-full -mr-20 -mt-20 transition-transform group-hover:scale-110" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-background-light dark:bg-background-dark border border-border/10 flex items-center justify-center mb-8 group-hover:bg-accent-light group-hover:text-white transition-all">
                    {cat.icon}
                  </div>
                  <h3 className="heading-h2 text-3xl mb-4 group-hover:text-heritage-light dark:group-hover:text-heritage-dark transition-colors">{cat.name}</h3>
                  <p className="body-text text-sm opacity-60 mb-8 max-w-xs">{cat.desc}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="ui-label text-[10px] opacity-40">{cat.count} JOURNEYS AVAILABLE</span>
                    <Link to="/spiritual" className="w-10 h-10 rounded-full border border-border/10 flex items-center justify-center hover:bg-heritage-light dark:hover:bg-heritage-dark hover:text-white transition-all">
                      <Sparkles size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Collections;
