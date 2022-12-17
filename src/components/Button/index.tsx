import { ComponentPropsWithoutRef, ReactNode } from 'react';
import * as Styles from './styles';

export interface ButtonProps {
  children: ReactNode;
}
export function Button({ children, ...rest }: ButtonProps & ComponentPropsWithoutRef<'button'>) {
  return <Styles.Button {...rest}>{children}</Styles.Button>;
}
