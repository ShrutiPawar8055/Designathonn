import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, ChevronRight, ChevronLeft } from 'lucide-react';
import { places } from '../../data/places';
import { Link } from 'react-router-dom';

const StoryCard = ({ story, index }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="min-w-[300px] md:min-w-[400px] group cursor-pointer"
  >
    <Link to={`/place/${story.id}`}>
      <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
        <img 
          src={story.img} 
          alt={story.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-md p-2 rounded-full text-white">
          <BookOpen size={16} />
        </div>
      </div>
      
      <div className="space-y-3">
        <p className="ui-label text-[8px] text-accent-light dark:text-accent-dark">{story.state}</p>
        <h3 className="heading-h3 text-xl md:text-2xl group-hover:text-heritage-light dark:group-hover:text-heritage-dark transition-colors">
          {story.name}: {story.tagline}
        </h3>
        <div className="flex items-center space-x-4 text-muted-light dark:text-muted-dark">
          <div className="flex items-center space-x-1">
            <Clock size={14} />
            <span className="ui-label text-[8px]">{story.audioGuide.duration} listen</span>
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);

const TrendingStories = () => {
  const trendingStories = places.slice(0, 3);
  
  return (
    <section className="py-24 bg-surface-light dark:bg-surface-dark overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <p className="ui-label text-accent-light dark:text-accent-dark mb-4">TRENDING STORIES</p>
            <h2 className="heading-h2">Loved by explorers</h2>
          </div>
          <div className="flex space-x-4">
            <button className="w-12 h-12 rounded-full border border-border/10 flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button className="w-12 h-12 rounded-full border border-border/10 flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="flex space-x-8 overflow-x-auto pb-8 scrollbar-hide">
          {trendingStories.map((story, i) => (
            <StoryCard key={story.id} story={story} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingStories;
