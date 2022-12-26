import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2.4rem;
  overflow: hidden;

  box-shadow: 10px 10px 0 0 ${({ theme }) => theme.color.foreground};

  border: ${({ theme }) => theme.color.foreground} 3px solid;
  border-radius: 1.6rem;
  margin: 1.6rem;

  @media (${({ theme }) => theme.media.large}) {
    margin-block: 0;
    margin-inline: 0 12.4rem;

    border-bottom: 0;
    border-left: 0;

    border-radius: 0 1.6rem 0 0;
  }
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;

  overflow-y: auto;
  height: 100%;
`;
