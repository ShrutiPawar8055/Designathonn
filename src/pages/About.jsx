import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Sparkles, BookOpen, Heart } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <PageWrapper>
      <div className="py-24 px-6 max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-heritage-light dark:text-heritage-dark">
            {t('aboutPage.aboutReverie')}
          </h1>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            {t('aboutPage.tagline')}
          </p>
        </motion.div>

        {/* Creator Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-surface-light dark:bg-surface-dark border border-border/10 rounded-[2.5rem] p-12 mb-16 shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent-light to-heritage-light dark:from-accent-dark dark:to-heritage-dark flex items-center justify-center text-white text-4xl font-bold shadow-xl">
              SP
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-3">Shruti Pawar</h2>
              <p className="ui-label tracking-[0.2em] text-accent-light dark:text-accent-dark mb-4">
                {t('aboutPage.creatorDeveloper')}
              </p>
              <p className="opacity-80 mb-6 text-lg">
                {t('aboutPage.creatorDesc1')} <span className="font-bold text-heritage-light dark:text-heritage-dark">Designathon 2024</span>, {t('aboutPage.creatorDesc2')}
              </p>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <span className="flex items-center gap-2 text-sm opacity-70">
                  <Heart size={16} className="text-accent-light dark:text-accent-dark" />
                  {t('aboutPage.madeWithLove')}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-accent-light/10 dark:bg-accent-dark/10 rounded-full">
                <BookOpen className="text-accent-light dark:text-accent-dark" size={24} />
              </div>
              <h3 className="text-2xl font-bold">{t('aboutPage.ourMission')}</h3>
            </div>
            <p className="text-lg opacity-80 leading-relaxed">
              {t('aboutPage.missionDesc')}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-heritage-light/10 dark:bg-heritage-dark/10 rounded-full">
                <Sparkles className="text-heritage-light dark:text-heritage-dark" size={24} />
              </div>
              <h3 className="text-2xl font-bold">{t('aboutPage.whatMakesUsSpecial')}</h3>
            </div>
            <p className="text-lg opacity-80 leading-relaxed">
              {t('aboutPage.specialDesc')}
            </p>
          </motion.div>
        </div>

        {/* Collaboration Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-heritage-light/5 to-accent-light/5 dark:from-heritage-dark/10 dark:to-accent-dark/10 border border-border/10 rounded-[2.5rem] p-12 text-center shadow-xl"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Users className="text-accent-light dark:text-accent-dark" size={32} />
            <h2 className="text-3xl font-bold">{t('aboutPage.openForCollaboration')}</h2>
          </div>
          
          <p className="text-xl opacity-80 max-w-3xl mx-auto mb-10 leading-relaxed">
            {t('aboutPage.collabDesc')}
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
            <div className="bg-background-light dark:bg-background-dark p-8 rounded-2xl">
              <MapPin size={28} className="mx-auto mb-4 text-accent-light dark:text-accent-dark" />
              <h4 className="font-bold text-lg mb-2">{t('aboutPage.localGuides')}</h4>
              <p className="opacity-70 text-sm">{t('aboutPage.localGuidesDesc')}</p>
            </div>
            <div className="bg-background-light dark:bg-background-dark p-8 rounded-2xl">
              <BookOpen size={28} className="mx-auto mb-4 text-heritage-light dark:text-heritage-dark" />
              <h4 className="font-bold text-lg mb-2">{t('aboutPage.historiansScholars')}</h4>
              <p className="opacity-70 text-sm">{t('aboutPage.historiansScholarsDesc')}</p>
            </div>
            <div className="bg-background-light dark:bg-background-dark p-8 rounded-2xl">
              <Heart size={28} className="mx-auto mb-4 text-accent-light dark:text-accent-dark" />
              <h4 className="font-bold text-lg mb-2">{t('aboutPage.storytellersArtists')}</h4>
              <p className="opacity-70 text-sm">{t('aboutPage.storytellersArtistsDesc')}</p>
            </div>
          </div>

          <button className="px-10 py-4 bg-heritage-light dark:bg-heritage-dark text-white rounded-full ui-label tracking-[0.2em] hover:scale-105 transition-transform shadow-lg">
            {t('aboutPage.getInTouch')}
          </button>
        </motion.div>

      </div>
    </PageWrapper>
  );
};

export default About;
