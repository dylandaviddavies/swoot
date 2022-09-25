import * as React from 'react';
import { ButtonKind, ButtonSize, ThemeColor } from '@swoot/types';
interface Props<T extends React.ElementType> {
    as?: T;
    color?: ThemeColor;
    kind?: ButtonKind;
    size?: ButtonSize;
    children?: React.ReactNode;
}
declare type ButtonProps<T extends React.ElementType> = Props<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>;
export declare function Button<T extends React.ElementType = 'button'>({ as, color, kind, size, ...props }: ButtonProps<T>): JSX.Element;
export {};
