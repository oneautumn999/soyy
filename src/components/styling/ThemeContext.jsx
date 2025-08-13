import { createContext, useContext, useState, useEffect } from 'react';

const themes = {
  default: {
      primary: 'bg-zinc-900',
    secondary: 'bg-zinc-800',
    headerBg: 'bg-gradient-to-tr from-zinc-900 via-zinc-800 to-zinc-700',
    footerBg: 'bg-gradient-to-tr from-zinc-900 via-zinc-800 to-zinc-700',
    footerHover: 'hover:text-zinc-300',
    headerText: 'text-white',
    footerText: 'text-zinc-300',
    text: 'text-zinc-200',
    textLight: 'text-zinc-400',
    background: 'bg-zinc-900',
    backgroundSecondary: 'bg-zinc-800',
    border: 'border-zinc-700',
    button: 'bg-zinc-700',
    buttonHover: 'hover:bg-zinc-600',
    inputFocus: 'focus:ring-zinc-600 focus:border-zinc-600',
    inputBg: 'bg-zinc-800',
    overlay: 'bg-black/60',
    accent: 'text-cyan-400',
    divider: 'border-zinc-600',
    shadowBox: 'shadow-lg shadow-black/40'
  },
  pastel: {
    primary: 'bg-yellow-300',
    secondary: 'bg-sky-200',
    headerBg: 'bg-gradient-to-tr from-yellow-200 via-sky-200 to-green-200',
    footerBg: 'bg-gradient-to-tr from-green-200 via-yellow-100 to-sky-100',
    footerHover: 'hover:text-green-600',
    headerText: 'text-sky-900',
    footerText: 'text-green-900',
    text: 'text-green-900',
    textLight: 'text-sky-700',
    background: 'bg-yellow-100',
    backgroundSecondary: 'bg-sky-100',
    border: 'border-yellow-300',
    button: 'bg-green-300',
    buttonHover: 'hover:bg-green-400',
    inputFocus: 'focus:ring-yellow-400 focus:border-yellow-400',
    inputBg: 'bg-white',
    overlay: 'bg-yellow-100/80',
    accent: 'text-yellow-600',
    divider: 'border-green-300',
    shadowBox: 'shadow-lg shadow-yellow-400/70'
  },
  classy: {
    primary: 'bg-pink-300',
    secondary: 'bg-pink-200',
    headerBg: 'bg-gradient-to-tr from-pink-100 via-pink-200 to-rose-100',
    footerBg: 'bg-gradient-to-tr from-pink-100 via-rose-100 to-white',
    footerHover: 'hover:text-pink-500',
    headerText: 'text-pink-900',
    footerText: 'text-pink-700',
    text: 'text-pink-900',
    textLight: 'text-rose-400',
    background: 'bg-pink-50',
    backgroundSecondary: 'bg-rose-100',
    border: 'border-pink-200',
    button: 'bg-pink-200',
    buttonHover: 'hover:bg-pink-400',
    inputFocus: 'focus:ring-pink-300 focus:border-pink-300',
    inputBg: 'bg-white',
    overlay: 'bg-pink-100/80',
    accent: 'text-rose-500',
    divider: 'border-pink-300',
    shadowBox: 'shadow-lg shadow-pink-400/70'
  }
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme && themes[savedTheme] ? savedTheme : 'default';
  });

  useEffect(() => {
    localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  const changeTheme = (themeName) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName);
    }
  };

  const value = {
    currentTheme,
    changeTheme,
    themes,
    themeColors: themes[currentTheme],
    themeOptions: Object.keys(themes)
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};