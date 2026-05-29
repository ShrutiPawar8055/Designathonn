import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, History, Compass, Landmark, Ghost } from 'lucide-react';
import spiritualImg from '../../assets/places/varanasi.png';
import mysticalImg from '../../assets/places/mystical-bhangar-fort-rajasthan.png';
import historicImg from '../../assets/places/taj-mahal.png';
import coastalImg from '../../assets/places/coasltal.png';
import royalImg from '../../assets/places/vrindavan-prem-mandir.png';

const moods = [
  { 
    title: 'Spiritual', 
    desc: 'Find peace in sacred spaces', 
    icon: <Sparkles size={20} />, 
    img: spiritualImg 
  },
  { 
    title: 'Mystical', 
    desc: 'Unravel myths and mysteries', 
    icon: <Ghost size={20} />, 
    img: mysticalImg 
  },
  { 
    title: 'Historic', 
    desc: 'Walk through civilizations', 
    icon: <History size={20} />, 
    img: historicImg 
  },
  { 
    title: 'Coastal', 
    desc: 'Tales from shores and oceans', 
    icon: <Compass size={20} />, 
    img: coastalImg 
  },
  { 
    title: 'Royal', 
    desc: 'Legends of kings and empires', 
    icon: <Landmark size={20} />, 
    img: royalImg 
  },
];

const MoodCard = ({ mood, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ y: -10 }}
    className="relative group aspect-[2/3] overflow-hidden rounded-2xl cursor-pointer"
  >
    <img 
      src={mood.img} 
      alt={mood.title} 
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
    
    <div className="absolute inset-0 p-6 flex flex-col justify-end">
      <div className="mb-4 text-accent-dark">
        {mood.icon}
      </div>
      <h3 className="heading-h3 text-white text-xl mb-2">{mood.title}</h3>
      <p className="body-text text-white/60 text-xs">{mood.desc}</p>
    </div>
  </motion.div>
);

const ExploreByMood = () => {
  return (
    <section className="py-24 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <p className="ui-label text-accent-light dark:text-accent-dark mb-4">EXPLORE BY MOOD</p>
            <h2 className="heading-h2">What calls to <span className="italic text-heritage-light dark:text-heritage-dark">you</span> today?</h2>
          </div>
          <button className="hidden md:flex items-center space-x-2 text-muted-light dark:text-muted-dark hover:text-accent-light transition-colors group">
            <span className="ui-label text-[10px]">VIEW ALL</span>
            <div className="h-px w-8 bg-muted-light/30 group-hover:w-12 transition-all" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {moods.map((mood, i) => (
            <MoodCard key={mood.title} mood={mood} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreByMood;
