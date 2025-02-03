import React, { createContext, useState, useContext } from 'react';
import en from '../locales/en.json';
import ka from '../locales/ka.json';

const translations = { en, ka };

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const translate = (key) => {
    const keys = key.split('.');
    return keys.reduce((obj, k) => obj?.[k], translations[language]) || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);   