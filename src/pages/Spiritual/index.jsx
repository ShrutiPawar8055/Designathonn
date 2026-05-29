import React, { useState } from 'react';
import PageWrapper from '../../components/layout/PageWrapper';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Filter, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

import { places } from '../../data/places';

const Spiritual = () => {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filteredPlaces = places.filter(place => {
    const matchesFilter = filter === 'All' || place.region === filter || place.category === filter;
    const matchesSearch = place.name.toLowerCase().includes(search.toLowerCase()) || 
                          place.state.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <PageWrapper>
      <section className="pt-40 pb-20 bg-background-light dark:bg-background-dark">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-20">
            <p className="ui-label text-accent-light dark:text-accent-dark mb-6">SACRED GEOGRAPHY</p>
            <h1 className="display-h1 mb-8">Spiritual Journeys</h1>
            <p className="body-text opacity-70">
              India's spiritual landscape is a tapestry of ancient temples, sacred rivers, and timeless traditions. Embark on a journey to discover the soul of these divine spaces.
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
            <div className="flex flex-wrap gap-4">
              {['All', 'North', 'South', 'West', 'Spiritual', 'Historic'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-6 py-2 rounded-full border transition-all text-xs font-medium ${
                    filter === f 
                      ? 'bg-heritage-light dark:bg-heritage-dark border-heritage-light dark:border-heritage-dark text-white' 
                      : 'border-border/20 hover:border-accent-light'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30" size={18} />
              <input 
                type="text" 
                placeholder="Search by place or state..." 
                className="w-full bg-surface-light dark:bg-surface-dark border border-border/10 rounded-full pl-12 pr-6 py-3 text-sm focus:outline-none focus:border-accent-light"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPlaces.map((place, i) => (
              <motion.div
                key={place.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group"
              >
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6">
                  <img 
                    src={place.img} 
                    alt={place.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-[8px] text-white ui-label">
                    {place.deity}
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center space-x-2 text-accent-light dark:text-accent-dark mb-2">
                      <MapPin size={12} />
                      <span className="ui-label text-[8px]">{place.state}</span>
                    </div>
                    <h3 className="heading-h3 text-xl mb-2">{place.name}</h3>
                    <p className="body-text text-sm opacity-60 line-clamp-2">{place.desc}</p>
                  </div>
                  <Link 
                    to={`/place/${place.id}`}
                    className="w-10 h-10 rounded-full border border-border/20 flex items-center justify-center hover:bg-heritage-light dark:hover:bg-heritage-dark hover:text-white transition-all"
                  >
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredPlaces.length === 0 && (
            <div className="py-40 text-center">
              <p className="body-text opacity-40 italic">No sacred places found matching your search.</p>
            </div>
          )}
        </div>
      </section>
    </PageWrapper>
  );
};

export default Spiritual;
