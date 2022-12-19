import styled from 'styled-components';

export const Wrapper = styled.article`
  display: flex;
  background-color: ${({ theme }) => theme.color.primary.main};
  padding: 2.4rem;
`;
