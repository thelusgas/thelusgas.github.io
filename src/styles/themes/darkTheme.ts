import { DefaultTheme } from 'styled-components';

export const darkTheme: DefaultTheme = {
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
      secondary: `'Fira Sans', sans-serif`,
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
      main: '#85cfff',
      onMain: '#00344c',
      container: '#004c6c',
      onContainer: '#c7e7ff',
    },
    secondary: {
      main: '#ffb3b0',
      onMain: '#93001a',
      container: '#ff4d4d',
      onContainer: '#ffdad8',
    },
    tertiary: {
      main: '#ffb1c0',
      onMain: '#610e2a',
      container: '#7f2640',
      onContainer: '#ffd9df',
    },
    error: {
      main: '#ffb4ab',
      onMain: '#690005',
      container: '#93000a',
      onContainer: '#ffdad6',
    },

    background: '#191c1e',
    onBackground: '#e2e2e5',

    surface: '#2e3133',
    onSurface: '#e2e2e5',
    surfaceVariant: '#41484d',
    onSurfaceVariant: '#c1c7ce',
    outline: '#8b9198',
  },
};
