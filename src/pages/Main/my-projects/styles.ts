import styled from 'styled-components';

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.tertiary.main};
  padding: 2.4rem;
`;
