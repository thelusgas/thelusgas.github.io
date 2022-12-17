import React from 'react';
import ReactDOM from 'react-dom/client';
// pages
import { Start } from '@pages/Start';
// styles
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '@styles/themes/darkTheme';
import { GlobalStyle } from '@styles/global';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <Start />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
