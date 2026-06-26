import React, { createContext, useContext, useState, useEffect } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from '../translations/en.json';
import hiTranslations from '../translations/hi.json';
import mrTranslations from '../translations/mr.json';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [i18nInitialized, setI18nInitialized] = useState(false);

  useEffect(() => {
    // Initialize i18n after the component mounts (so that window/localStorage are available)
    const initI18n = async () => {
      const savedLanguage = localStorage.getItem('language') || 'en';
      setLanguage(savedLanguage);

      await i18n
        .use(initReactI18next)
        .init({
          resources: {
            en: { translation: enTranslations },
            hi: { translation: hiTranslations },
            mr: { translation: mrTranslations },
          },
          lng: savedLanguage,
          fallbackLng: "en",
          interpolation: { escapeValue: false }
        });
      
      setI18nInitialized(true);
    };

    initI18n();
  }, []);

  const changeLanguage = (lng) => {
    setLanguage(lng);
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  // Don't render children until i18n is initialized!
  if (!i18nInitialized) {
    return null; // Or a loading spinner if you want!
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
