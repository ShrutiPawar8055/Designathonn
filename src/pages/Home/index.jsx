import React from 'react';
import PageWrapper from '../../components/layout/PageWrapper';
import HeroBanner from '../../components/story/HeroBanner';
import ProblemStatementStrip from '../../components/sections/ProblemStatementStrip';
import ExploreByMood from '../../components/sections/ExploreByMood';
import TrendingStories from '../../components/sections/TrendingStories';
import SpiritualJourneys from '../../components/sections/PlaceGrid';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  
  return (
    <PageWrapper>
      <HeroBanner />
      <ProblemStatementStrip />
      <ExploreByMood />
      <TrendingStories />
      <SpiritualJourneys />
      
      {/* How it Works Section */}
      <section className="py-24 bg-surface-light dark:bg-surface-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <p className="ui-label text-accent-light dark:text-accent-dark mb-4">{t('howItWorks.sectionTitle')}</p>
            <h2 className="heading-h2">{t('howItWorks.title')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { step: '01', title: t('howItWorks.step1Title'), desc: t('howItWorks.step1Desc') },
              { step: '02', title: t('howItWorks.step2Title'), desc: t('howItWorks.step2Desc') },
              { step: '03', title: t('howItWorks.step3Title'), desc: t('howItWorks.step3Desc') },
            ].map((item, i) => (
              <div key={i} className="relative group text-center">
                <span className="display-h1 text-8xl opacity-5 absolute -top-10 left-1/2 -translate-x-1/2 group-hover:opacity-10 transition-opacity">
                  {item.step}
                </span>
                <h3 className="heading-h3 mb-6 relative z-10">{item.title}</h3>
                <p className="body-text text-sm opacity-60 max-w-xs mx-auto relative z-10">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Home;
