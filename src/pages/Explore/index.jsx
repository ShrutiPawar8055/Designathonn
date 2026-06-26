import React from 'react';
import PageWrapper from '../../components/layout/PageWrapper';
import { useTranslation } from 'react-i18next';

const Explore = () => {
  const { t } = useTranslation();
  return (
    <PageWrapper>
      <div className="container mx-auto px-6 py-40">
        <h1 className="heading-h2">{t('explorePage.title')}</h1>
      </div>
    </PageWrapper>
  );
};

export default Explore;
