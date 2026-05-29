import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { places } from '../../data/places';

const PlaceCard = ({ place, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="group relative overflow-hidden rounded-3xl aspect-[4/5]"
  >
    <img 
      src={place.img} 
      alt={place.name} 
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/20 to-transparent" />
    
    <div className="absolute inset-0 p-8 flex flex-col justify-end">
      <div className="flex items-center space-x-2 text-accent-dark mb-3">
        <MapPin size={12} />
        <span className="ui-label text-[8px]">{place.state}</span>
      </div>
      <h3 className="heading-h3 text-white text-2xl mb-2">{place.name}</h3>
      <p className="body-text text-white/60 text-xs mb-6">{place.shortDesc}</p>
      
      <Link 
        to={`/place/${place.id}`}
        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all group-hover:bg-heritage-dark group-hover:border-heritage-dark group-hover:w-full group-hover:justify-between group-hover:px-6"
      >
        <span className="hidden group-hover:block ui-label text-[10px]">EXPLORE JOURNEY</span>
        <ArrowRight size={18} />
      </Link>
    </div>
  </motion.div>
);

const SpiritualJourneys = () => {
  const spiritualPlaces = places.filter(p => p.category === 'Spiritual').slice(0, 4);

  return (
    <section className="py-24 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <p className="ui-label text-accent-light dark:text-accent-dark mb-4">SACRED PLACES</p>
            <h2 className="heading-h2">Spiritual Journeys</h2>
          </div>
          <Link to="/spiritual" className="hidden md:flex items-center space-x-2 text-muted-light dark:text-muted-dark hover:text-accent-light transition-colors group">
            <span className="ui-label text-[10px]">VIEW ALL JOURNEYS</span>
            <div className="h-px w-8 bg-muted-light/30 group-hover:w-12 transition-all" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {spiritualPlaces.map((place, i) => (
            <PlaceCard key={place.id} place={place} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpiritualJourneys;
