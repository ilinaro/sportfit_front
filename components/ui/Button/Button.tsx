import styles from './Button.module.scss';
import { Button } from '@mantine/core';
import clsx from 'clsx';
import React from 'react';
import { MouseEventHandler } from 'react';

type ButtonComponentT = JSX.IntrinsicElements['button'] & {
  children: React.ReactNode;
  onClick?: MouseEventHandler;
  fullWidth?: boolean;
  color?: 'blue' | 'white';
};

export const ButtonComponent = React.forwardRef<
  HTMLButtonElement,
  ButtonComponentT
>(({ onClick, children, type = 'button', fullWidth = false, color }, ref) => {
  return (
    <Button
      ref={ref}
      fullWidth={fullWidth}
      type={type}
      onClick={onClick}
      classNames={{ root: clsx(styles.Root, styles[color ?? '']) }}
    >
      {children}
    </Button>
  );
});

ButtonComponent.displayName = 'ButtonComponent';
