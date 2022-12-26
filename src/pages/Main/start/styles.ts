import styled, { css } from 'styled-components';
import texture from '@assets/background/bg-texture.svg';
import polkaDots from '@assets/background/bg-polka-dots.svg';
import bgCheckers from '@assets/background/bg-checkers.svg';
import Lottie from 'lottie-react';

const typewriterAnimation = `typewriter 2s steps(15) 1s forwards`;

const background = css`
  background: ${({ theme }) => theme.color.primary.main} url(${texture}) repeat;
  background-blend-mode: multiply;
`;

export const Wrapper = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
  grid-template-rows: 1fr min-content min-content min-content 1fr;

  place-items: center;

  gap: 3.2rem;
  padding: 8rem;

  ${background}
`;

export const LottieWrapper = styled(Lottie)`
  grid-row: 1 / span 4;
  align-self: stretch;
  min-width: 40rem;
  background: ${({ theme }) => theme.color.tertiary.main} url(${bgCheckers}) repeat center;
  background-blend-mode: multiply;

  border-radius: 1.6rem;
  border: ${({ theme }) => theme.color.foreground} 3px solid;
  box-shadow: 5px 5px 0 0 ${({ theme }) => theme.color.foreground};
`;

export const Typewriter = styled.h2`
  grid-row: 2 / span 1;
  grid-column: auto / span 2;
  font-family: ${({ theme }) => theme.typography.fontFamily.tertiary};
  width: max-content;
  position: relative;
  align-self: center;
  margin-bottom: 4.8rem;

  &::before,
  &::after {
    content: '';
    position: absolute;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  &::before {
    animation: ${typewriterAnimation};
    ${background}
  }

  &::after {
    width: 0.4rem;
    background: ${({ theme }) => theme.color.foreground};
    animation: ${typewriterAnimation}, blink 0.75s steps(13) infinite;
  }

  @keyframes typewriter {
    to {
      left: 100%;
    }
  }

  @keyframes blink {
    to {
      background: transparent;
    }
  }
`;

export const FirstSection = styled.section`
  grid-row: 3 / span 1;
  grid-column: span 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SecondSection = styled.section`
  grid-row: 4 / span 1;
  grid-column: span 2;

  display: flex;

  align-items: center;
  justify-content: center;
  gap: 2.4rem;
  padding: 4.8rem;

  background: ${({ theme }) => theme.color.secondary.main} url(${polkaDots}) repeat;
  background-blend-mode: multiply;

  border-radius: 1.6rem;
  border: ${({ theme }) => theme.color.foreground} 3px solid;
  box-shadow: 5px 5px 0 0 ${({ theme }) => theme.color.foreground};
`;

export const ThirdSection = styled.section`
  grid-row: 5 / span 1;
  grid-column: span 3;
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.l}rem;
  line-height: ${({ theme }) => theme.typography.lineHeight.s};
`;
