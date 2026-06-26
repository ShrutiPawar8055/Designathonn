import React from 'react';
import { useTranslation } from 'react-i18next';

const ProblemStatementStrip = () => {
  const { t } = useTranslation();
  
  return (
    <section className="bg-heritage-light dark:bg-heritage-dark py-12 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="heading-h2 text-background-light dark:text-background-dark text-2xl md:text-3xl max-w-2xl">
            "{t('problem.quote')} <span className="italic opacity-70">{t('problem.quoteItalic')}</span>"
          </h2>
          <div className="flex items-center space-x-4">
            <div className="h-px w-12 bg-background-light/30 dark:bg-background-dark/30" />
            <p className="ui-label text-background-light/60 dark:text-background-dark/60 text-[10px]">
              {t('problem.promise')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatementStrip;
