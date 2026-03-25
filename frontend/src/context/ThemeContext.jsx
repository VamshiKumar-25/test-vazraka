import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem('vazraka-theme');
    if (savedTheme) {
      return savedTheme;
    }
    // Fallback to system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light'; // Default to light mode for SaaS aesthetics if no match
  });

  useEffect(() => {
    // Apply data attribute to the document root element
    document.documentElement.setAttribute('data-theme', theme);

    // Watch OS Theme preference continuously
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      // Only swap if user hasn't explicitly set a local preference overriding it
      if (!localStorage.getItem('vazraka-theme-manual')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const toggleTheme = () => {
    localStorage.setItem('vazraka-theme-manual', 'true');
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('vazraka-theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
