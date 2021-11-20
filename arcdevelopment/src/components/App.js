import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Header from './ui/header';
import theme from './ui/theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
        Hello
      </ThemeProvider>
  );
}

export default App;
