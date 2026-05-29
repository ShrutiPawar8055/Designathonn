import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import { motion } from 'framer-motion';
import { places } from '../data/places';
import { Link } from 'react-router-dom';
import { Sparkles, History, Landmark, Compass } from 'lucide-react';
import spiritualImg from '../assets/collections/spiritual.png';
import historicImg from '../assets/collections/historic.png';
import mythologicalImg from '../assets/collections/mythological.png';
import coastalImg from '../assets/collections/coastal.png';

const Collections = () => {
  const categories = [
    { 
      name: 'Spiritual', 
      icon: <Sparkles className="text-accent-light" />, 
      desc: 'Sacred journeys and divine connections.',
      count: places.filter(p => p.category === 'Spiritual').length,
      img: spiritualImg,
      route: '/spiritual' // Or we can link to an explore page with filter
    },
    { 
      name: 'Historic', 
      icon: <History className="text-accent-light" />, 
      desc: 'Architectural marvels and ancient legacies.',
      count: places.filter(p => p.category === 'Historic').length,
      img: historicImg,
      route: '/explore'
    },
    { 
      name: 'Mythological', 
      icon: <Landmark className="text-accent-light" />, 
      desc: 'Where legends and reality intertwine.',
      count: 0, // Placeholder
      img: mythologicalImg,
      route: '/explore'
    },
    { 
      name: 'Coastal', 
      icon: <Compass className="text-accent-light" />, 
      desc: 'Maritime stories and sea-side wonders.',
      count: 0, // Placeholder
      img: coastalImg,
      route: '/explore'
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <Link to={cat.route} key={cat.name}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-surface-light dark:bg-surface-dark border border-border/10 rounded-2xl p-0 shadow-sm hover:shadow-2xl transition-all overflow-hidden relative"
                >
                  {/* Image Section */}
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={cat.img} 
                      alt={cat.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-light/90 dark:from-background-dark/90 via-transparent to-transparent" />
                  </div>

                  {/* Content Section */}
                  <div className="relative z-10 p-6">
                    <h3 className="heading-h2 text-xl mb-2 group-hover:text-heritage-light dark:group-hover:text-heritage-dark transition-colors">{cat.name}</h3>
                    <p className="body-text text-xs opacity-60 mb-4">{cat.desc}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="ui-label text-[8px] opacity-40">{cat.count} JOURNEYS</span>
                      <div className="w-8 h-8 rounded-full border border-border/10 flex items-center justify-center hover:bg-heritage-light dark:hover:bg-heritage-dark hover:text-white transition-all">
                        <Sparkles size={12} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Collections;
