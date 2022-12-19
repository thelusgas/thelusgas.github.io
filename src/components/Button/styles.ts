import styled, { css } from 'styled-components';

export const Button = styled.button<{
  $variant: 'primary' | 'secondary' | 'tertiary' | 'quarternary';
}>`
  display: flex;
  padding: 0.8rem 1.6rem;

  ${({ $variant, theme }) =>
    $variant === 'primary'
      ? css`
          background-color: ${theme.color.primary.dark};
        `
      : $variant === 'secondary'
      ? css`
          background-color: ${theme.color.secondary.dark};
        `
      : $variant === 'tertiary'
      ? css`
          background-color: ${theme.color.tertiary.dark};
        `
      : css`
          background-color: ${theme.color.quarternary.dark};
        `}

  border-radius: 0.4rem;

  font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  font-size: ${({ theme }) => theme.typography.fontSize.l}rem;

  border: ${({ theme }) => theme.color.foreground} 3px solid;
  box-shadow: 5px 5px 0 0 ${({ theme }) => theme.color.foreground};

  @media (hover: hover) {
    &:hover,
    &:focus {
      outline: none;
      box-shadow: 1px 2px 0 0 ${({ theme }) => theme.color.foreground};
      transform: translateY(4px);
    }
  }

  &:active {
    ${({ $variant, theme }) =>
      $variant === 'primary'
        ? css`
            background-color: ${theme.color.primary.light};
          `
        : $variant === 'secondary'
        ? css`
            background-color: ${theme.color.secondary.light};
          `
        : $variant === 'tertiary'
        ? css`
            background-color: ${theme.color.tertiary.light};
          `
        : css`
            background-color: ${theme.color.quarternary.light};
          `}
  }
  transition: all 0.2s ease-in-out;
`;
