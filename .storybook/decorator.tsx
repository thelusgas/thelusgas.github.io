import React from 'react';
import { Decorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../src/styles/themes/darkTheme';
import { GlobalStyle } from '../src/styles/global';

const withTheme: Decorator = (StoryFn) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <StoryFn />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export const globalDecorators = [withTheme];
