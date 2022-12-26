import { createGlobalStyle } from 'styled-components';
import clouds from '@assets/background/bg-clouds.svg';

const styled = { createGlobalStyle };

export const GlobalStyle = styled.createGlobalStyle`
  :root {
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  html {
    font-size: 62.5%;
    & body {
      height: 100%;
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    html {
      scroll-behavior: smooth;
    }
  }

  body {
    font-size: 1.6rem;
    line-height: 1.5;

    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    color: ${({ theme }) => theme.color.foreground};

    & div#root {
      display: flex;
      flex-direction: column;
      gap: 2.4rem;

      width: 100vw;
      height: 100vh;

      align-items: flex-end;

      overflow: hidden;

      @media (${({ theme }) => theme.media.medium}) {
        justify-content: center;
      }
      background: ${({ theme }) => theme.color.background} url(${clouds}) repeat;
      background-blend-mode: multiply;
    }
  }

  h1 {
    font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
    ${({ theme }) => theme.typography.fontSize.xl};
    line-height: ${({ theme }) => theme.typography.lineHeight.xxl}rem;
    font-weight: ${({ theme }) => theme.typography.fontWeight.extraBold};
  }

  h2 {
    font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
    ${({ theme }) => theme.typography.fontSize.xl};
    line-height: ${({ theme }) => theme.typography.lineHeight.xl}rem;
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  }

  h3 {
    font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
    ${({ theme }) => theme.typography.fontSize.l};
    line-height: ${({ theme }) => theme.typography.lineHeight.l}rem;
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  }

  h4 {
    font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
    ${({ theme }) => theme.typography.fontSize.m};
    line-height: ${({ theme }) => theme.typography.lineHeight.m}rem;
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  }

  p {
    ${({ theme }) => theme.typography.fontSize.s};
    line-height: ${({ theme }) => theme.typography.lineHeight.s}rem;
    font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  }

  * {
    list-style: none;
    text-decoration: none;

    margin: 0;
    padding: 0;
    font: inherit;
    color: inherit;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  img,
  picture,
  svg,
  video {
    display: block;
  }

  button {
    cursor: pointer;
    border: none;
    background: transparent;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar {
    display: none;
    width: 0.5rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.foreground};
  }

  ::-webkit-scrollbar-button {
    display: block;
  }
`;
