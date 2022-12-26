import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 1.6rem;

  overflow: hidden;

  border: ${({ theme }) => theme.color.foreground} 3px solid;
  box-shadow: 5px 5px 0 0 ${({ theme }) => theme.color.foreground};

  width: 100%;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;

  height: 100%;
  overflow-y: auto;
`;
