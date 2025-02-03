import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { translate } = useLanguage();

  return (
    <div className="page-container about-page">
      <h1>{translate('about.title')}</h1>
      <p>{translate('about.description')}</p>
    </div>
  );
};

export default About;