import React from 'react';
import { Decorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../src/styles/themes/lightTheme';
import { GlobalStyle } from '../src/styles/global';

const withTheme: Decorator = (StoryFn) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <StoryFn />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export const globalDecorators = [withTheme];
