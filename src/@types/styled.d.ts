import 'styled-components';
import { Color } from '@core/types';

interface Palette {
  light: Color;
  main: Color;
  dark: Color;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    media: {
      superLarge: string;
      extraLarge: string;
      large: string;
      medium: string;
      small: string;
    };

    color: {
      primary: Palette;
      secondary: Palette;
      tertiary: Palette;

      background: Color;
      backgroundVariant: Color;
      foreground: Color;
      foregroundVariant: Color;
      foregroundVariant2: Color;
    };

    typography: {
      fontFamily: {
        primary: string;
        secondary: string;
      };
      fontSize: {
        s: number;
        m: number;
        l: number;
        xl: number;
        xxl: number;
      };

      lineHeight: {
        s: number;
        m: number;
        l: number;
        xl: number;
        xxl: number;
      };

      fontWeight: {
        light: number;
        regular: number;
        medium: number;
        bold: number;
        extraBold: number;
      };
    };
  }
}
