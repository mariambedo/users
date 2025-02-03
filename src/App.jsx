import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';
import useTheme from './hooks/useTheme';
import { useLanguage } from './contexts/LanguageContext';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, translate } = useLanguage();

  return (
    <Router>
      <nav>
        <Link to="/">{translate('nav.home')}</Link> | 
        <Link to="/about">{translate('nav.about')}</Link> | 
        <Link to="/users">{translate('nav.users')}</Link>
        <button onClick={toggleTheme}>
          {translate('nav.toggleTheme', { theme: theme === 'light' ? 'Dark' : 'Light' })}
        </button>
        <button onClick={() => setLanguage(language === 'en' ? 'ka' : 'en')}>
          {language === 'en' ? 'ქართული' : 'English'}
        </button>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  );
};

export default App; 