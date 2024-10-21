import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

const themes = {
  light: {
    background: '#fff',
    color: '#000',
  },
  dark: {
    background: '#000',
    color: '#fff',
  },
};

const DarkThemeProvider = ({ children }) => {
  const darkThemeEnabled = useSelector((state) => state.darkTheme);
  return (
    <ThemeProvider theme={darkThemeEnabled ? themes.dark : themes.light}>
      {children}
    </ThemeProvider>
  );
};

export default DarkThemeProvider;
