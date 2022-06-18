import * as React from 'react';
import { ButtonKind, ButtonSize, ThemeColor } from '@swoot/types';

interface Props<T extends React.ElementType> {
  as?: T;
  color?: ThemeColor;
  kind?: ButtonKind;
  size?: ButtonSize;
  children?: JSX.Element;
}

type ButtonProps<T extends React.ElementType> = Props<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>;

function Button<T extends React.ElementType = 'button'>({
  as,
  color = 'primary',
  kind = 'text',
  size = 'md',
  ...props
}: ButtonProps<T>) {
  const Component = as || 'button';

  const classes = `
    swoot-button
    swoot-button--${color}
    swoot-button--${kind}
    swoot-button--${size}
  `;

  return <Component {...props} className={classes} />;
}

export default Button;
