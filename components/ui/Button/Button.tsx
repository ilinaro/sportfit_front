import styles from './Button.module.scss';
import { Button } from '@mantine/core';
import React from 'react';
import { MouseEventHandler } from 'react';

type ButtonComponentT = JSX.IntrinsicElements['button'] & {
  children: React.ReactNode;
  onClick?: MouseEventHandler;
};

export const ButtonComponent = React.forwardRef<
  HTMLButtonElement,
  ButtonComponentT
>(({ onClick, children, type = 'button' }, ref) => {
  return (
    <Button
      ref={ref}
      fullWidth
      type={type}
      onClick={onClick}
      classNames={{ root: styles.Root, section: styles.Section }}
    >
      {children}
    </Button>
  );
});

ButtonComponent.displayName = 'ButtonComponent';
