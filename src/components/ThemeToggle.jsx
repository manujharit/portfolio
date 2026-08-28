import { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaPalette } from 'react-icons/fa';
import './ThemeToggle.scss';

const themes = ['dark', 'light', 'neo-brutal'];

const ThemeToggle = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Check if there is a saved theme in localStorage
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme && themes.includes(savedTheme)) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const cycleTheme = () => {
    const currentIndex = themes.indexOf(theme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    
    setTheme(nextTheme);
    localStorage.setItem('portfolio-theme', nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  const renderIcon = () => {
    if (theme === 'dark') return <FaMoon />;
    if (theme === 'light') return <FaSun />;
    return <FaPalette />;
  };

  return (
    <button 
      className={`theme-toggle theme-toggle--${theme}`} 
      onClick={cycleTheme}
      aria-label={`Switch to next theme. Current theme: ${theme}`}
      title="Switch Theme"
    >
      <div className="theme-toggle__icon">
        {renderIcon()}
      </div>
    </button>
  );
};

export default ThemeToggle;
