import styled from 'styled-components';

export const Wrapper = styled.article`
  display: flex;
  background-color: ${({ theme }) => theme.color.secondary.main};
  padding: 2.4rem;
`;
