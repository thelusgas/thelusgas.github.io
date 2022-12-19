import { ComponentPropsWithoutRef, ReactNode } from 'react';
import * as Styles from './styles';

export interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'quarternary';
}
export function Button({
  children,
  variant,
  ...rest
}: ButtonProps & ComponentPropsWithoutRef<'button'>) {
  return (
    <Styles.Button $variant={variant ?? 'primary'} {...rest}>
      {children}
    </Styles.Button>
  );
}
