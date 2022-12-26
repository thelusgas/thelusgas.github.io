import styled from 'styled-components';
import polkaDots from '@assets/background/bg-polka-dots.svg';

export const Wrapper = styled.nav`
  align-items: center;
  border: ${({ theme }) => theme.color.foreground} 3px solid;
  border-top: 0;
  box-shadow: 10px 10px 0 0 ${({ theme }) => theme.color.foreground};
  border-radius: 0 0 0 1.6rem;

  background: ${({ theme }) => theme.color.secondary.main} url(${polkaDots}) repeat;
  display: none;
  @media (${({ theme }) => theme.media.medium}) {
    display: flex;
  }
`;

export const List = styled.ul`
  display: flex;
  padding: 1.6rem;
  gap: 1.6rem;
`;

export const Cat = styled.img`
  width: 9.6rem;
  transform: perspective(1000px) rotateY(180deg);
`;
