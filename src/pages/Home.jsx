import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Home = () => {
  const { translate } = useLanguage();

  return (
    <div className="page-container home-page">
      <h1>{translate('home.title')}</h1>
      <p>{translate('home.welcome')}</p>
    </div>
  );
};

export default Home;