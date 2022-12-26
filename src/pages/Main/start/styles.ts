import styled, { css } from 'styled-components';
import texture from '@assets/background/bg-texture.svg';
import polkaDots from '@assets/background/bg-polka-dots.svg';
import bgCheckers from '@assets/background/bg-checkers.svg';
import { SpeechBubble } from '@assets/illustrations/SpeechBubble';
import Lottie from 'lottie-react';

const typewriterAnimation = `typewriter 2s steps(15) 1s forwards`;

const background = css`
  background: ${({ theme }) => theme.color.primary.main} url(${texture}) repeat;
  background-blend-mode: multiply;
`;

export const Wrapper = styled.article`
  position: relative;
  ${background};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 3.2rem;
  padding: 4.8rem 1.6rem;

  @media (${({ theme }) => theme.media.medium}) {
    display: grid;
    place-items: stretch;

    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-template-rows: repeat(4, min-content);

    grid-template-areas: 'guy typewriter typewriter' 'guy bubble bubble' 'guy links links' 'footer footer footer';
    gap: 3.2rem;
  }

  @media (${({ theme }) => theme.media.large}) {
    padding: 9.6rem;
  }
`;

export const LottieWrapper = styled(Lottie)`
  grid-area: guy;

  background: ${({ theme }) => theme.color.quarternary.main} url(${bgCheckers}) repeat center;
  background-blend-mode: multiply;

  border-radius: 1.6rem;
  border: ${({ theme }) => theme.color.foreground} 3px solid;
  box-shadow: 5px 5px 0 0 ${({ theme }) => theme.color.foreground};
`;

export const Bubble = styled(SpeechBubble)`
  grid-area: bubble;
  display: none;

  @media (${({ theme }) => theme.media.medium}) {
    display: flex;
  }
`;

export const Typewriter = styled.h1`
  grid-area: typewriter;
  font-family: ${({ theme }) => theme.typography.fontFamily.tertiary};
  width: max-content;
  position: relative;
  align-self: center;
  justify-self: center;
  & > span {
    color: ${({ theme }) => theme.color.secondary.dark};
  }

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
  grid-area: bubble;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
`;

export const SecondSection = styled.section`
  grid-area: links;

  display: flex;

  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.color.secondary.main} url(${polkaDots}) repeat;
  background-blend-mode: multiply;

  border-radius: 1.6rem;
  border: ${({ theme }) => theme.color.foreground} 3px solid;
  box-shadow: 5px 5px 0 0 ${({ theme }) => theme.color.foreground};

  gap: 1.6rem;
  padding: 2.4rem;
  & svg {
    width: 2.4rem;
    height: 2.4rem;
  }

  @media (${({ theme }) => theme.media.large}) {
    gap: 2.4rem;
    padding: 4.8rem;

    & svg {
      width: 6.4rem;
      height: 6.4rem;
    }
  }
`;

export const ThirdSection = styled.section`
  grid-area: footer;

  display: flex;
  flex-direction: column;
  width: 100%;

  align-items: center;
  justify-content: flex-end;
  text-align: right;
  gap: 2.4rem;
  & > button {
    display: none;
  }
  @media (${({ theme }) => theme.media.medium}) {
    & > button {
      display: flex;
    }
    flex-direction: row;
    gap: 4.8rem;
  }
`;

export const Description = styled.p`
  line-height: ${({ theme }) => theme.typography.lineHeight.s};

  & > span {
    color: ${({ theme }) => theme.color.secondary.dark};
  }

  ${({ theme }) => theme.typography.fontSize.m};
  max-width: 24rem;

  @media (${({ theme }) => theme.media.superLarge}) {
    ${({ theme }) => theme.typography.fontSize.l};
    max-width: 48rem;
  }
`;

export const Divider = styled.div<{ $type: 'main' | 'shadow' }>`
  position: absolute;
  bottom: ${({ $type }) => ($type === 'main' ? 0 : '4px')};
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);

  > svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: clamp(1.6rem, 10vw, 15rem);

    > path {
      fill: ${({ $type, theme }) =>
        $type === 'main' ? theme.color.secondary.main : theme.color.foreground};
    }
  }
`;
