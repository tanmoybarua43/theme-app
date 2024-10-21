import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import DarkThemeToggle from './DarkThemeToggle';
import GlobalStyles from './GlobalStyles';

const themes = {
  light: {
    background: '#fff',
    color: '#000'
  },
  dark: {
    background: '#000',
    color: '#fff'
  }
};

const Container = styled.div`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.color};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function App() {
  // Access the state directly, not through state.theme
  const darkThemeEnabled = useSelector(state => state.darkTheme);

  return (
    <ThemeProvider theme={darkThemeEnabled ? themes.dark : themes.light}>
      <GlobalStyles />
      <Container>
        <h1>Theme Toggler</h1>
        <DarkThemeToggle />
      </Container>
    </ThemeProvider>
  );
}

export default App;
