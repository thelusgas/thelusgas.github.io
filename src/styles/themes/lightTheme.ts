import { css, DefaultTheme } from 'styled-components';

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
      tertiary: `'Space Mono', monospace`,
    },
    fontSize: {
      s: css`
        font-size: 1.4rem;
      `,
      m: css`
        font-size: clamp(0.8rem, 2.5vw, 1.6rem);
      `,
      l: css`
        font-size: clamp(1.6rem, 2.5vw, 3.2rem);
      `,
      xl: css`
        font-size: clamp(3.2rem, 5vw, 6.4rem);
      `,
      xxl: css`
        font-size: clamp(4.8rem, 7.5vw, 9.6rem);
      `,
      xxxl: css`
        font-size: clamp(6.4rem, 10vw, 12.8rem);
      `,
    },
    lineHeight: {
      s: 2,
      m: 2.4,
      l: 4,
      xl: 7.2,
      xxl: 10,
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
