import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  media: {
    superLarge: `(min-width: 1400px)`,
    extraLarge: `(min-width: 1200px)`,
    large: '(min-width: 992px)',
    medium: '(min-width: 768px)',
    small: '(min-width: 576px)',
  },

  typography: {
    fontFamily: {
      primary: `'Rubik', serif`,
      secondary: `'Unbounded', sans-serif`,
    },
    fontSize: {
      s: 1.4,
      m: 1.6,
      l: 2.4,
      xl: 3.2,
      xxl: 4.8,
    },
    lineHeight: {
      s: 2,
      m: 2.4,
      l: 3.6,
      xl: 4.8,
      xxl: 6,
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
      extraBold: 900,
    },
  },

  color: {
    primary: {
      light: '#fad789',
      main: '#f8c555',
      dark: '#fcb821',
    },
    secondary: {
      light: '#e6e8fc',
      main: '#ccd1f9',
      dark: '#7b7cf7',
    },
    tertiary: {
      light: '#c5efff',
      main: '#aadbdb',
      dark: '#6e8e8e',
    },
    quarternary: {
      light: '#f8ece1',
      main: '#efd7c2',
      dark: '#fac5ad',
    },

    background: '#fffff4',
    backgroundVariant: '#f5f5f5',

    foreground: '#1c1b1f',
    foregroundVariant: '#adadae',
    foregroundVariant2: '#8f847a',
  },
};
