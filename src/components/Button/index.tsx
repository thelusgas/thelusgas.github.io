import { ComponentPropsWithoutRef, ReactNode } from 'react';

import * as Styles from './styles';

interface BaseButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'quarternary';
}

type ConditionalProps =
  | ({ href: string } & ComponentPropsWithoutRef<'a'>)
  | ({
      type: ComponentPropsWithoutRef<'button'>['type'];
    } & ComponentPropsWithoutRef<'button'>);

export type ButtonProps = BaseButtonProps & ConditionalProps;

export function Button({ children, variant, ...rest }: ButtonProps) {
  const isLink = 'href' in rest;
  return (
    <Styles.Button as={isLink ? 'a' : 'button'} $variant={variant ?? 'primary'} {...rest}>
      {children}
    </Styles.Button>
  );
}
