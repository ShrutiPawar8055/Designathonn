import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, History, Compass, Landmark, Ghost } from 'lucide-react';
import spiritualImg from '../../assets/places/varanasi.png';
import mysticalImg from '../../assets/places/mystical-bhangar-fort-rajasthan.png';
import historicImg from '../../assets/places/taj-mahal.png';
import coastalImg from '../../assets/places/coasltal.png';
import royalImg from '../../assets/places/vrindavan-prem-mandir.png';
import { useTranslation } from 'react-i18next';

const MoodCard = ({ mood, index }) => {
  const { t } = useTranslation();
  
  return (
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
        <h3 className="heading-h3 text-white text-xl mb-2">{t(mood.translationKeyTitle)}</h3>
        <p className="body-text text-white/60 text-xs">{t(mood.translationKeyDesc)}</p>
      </div>
    </motion.div>
  );
};

const ExploreByMood = () => {
  const { t } = useTranslation();
  
  const moods = [
    { 
      translationKeyTitle: 'exploreByMood.spiritual', 
      translationKeyDesc: 'exploreByMood.spiritualDesc',
      icon: <Sparkles size={20} />, 
      img: spiritualImg 
    },
    { 
      translationKeyTitle: 'exploreByMood.mystical', 
      translationKeyDesc: 'exploreByMood.mysticalDesc',
      icon: <Ghost size={20} />, 
      img: mysticalImg 
    },
    { 
      translationKeyTitle: 'exploreByMood.historical', 
      translationKeyDesc: 'exploreByMood.historicalDesc',
      icon: <History size={20} />, 
      img: historicImg 
    },
    { 
      translationKeyTitle: 'exploreByMood.coastal', 
      translationKeyDesc: 'exploreByMood.coastalDesc',
      icon: <Compass size={20} />, 
      img: coastalImg 
    },
    { 
      translationKeyTitle: 'exploreByMood.royal', 
      translationKeyDesc: 'exploreByMood.royalDesc',
      icon: <Landmark size={20} />, 
      img: royalImg 
    },
  ];
  
  return (
    <section className="py-24 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <p className="ui-label text-accent-light dark:text-accent-dark mb-4">{t('exploreByMood.title')}</p>
            <h2 className="heading-h2">{t('exploreByMood.subtitle')}</h2>
          </div>
          <button className="hidden md:flex items-center space-x-2 text-muted-light dark:text-muted-dark hover:text-accent-light transition-colors group">
            <span className="ui-label text-[10px]">{t('exploreByMood.viewAll')}</span>
            <div className="h-px w-8 bg-muted-light/30 group-hover:w-12 transition-all" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {moods.map((mood, i) => (
            <MoodCard key={mood.translationKeyTitle} mood={mood} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreByMood;
