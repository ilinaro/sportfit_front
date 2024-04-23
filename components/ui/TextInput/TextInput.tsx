import React from 'react';
import styles from './TextInput.module.scss';
import { TextInput } from '@mantine/core';
import clsx from 'clsx';

export type typesForTextField =
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'month'
  | 'number'
  | 'password'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

type AllTypeElement = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>;

type TextInputComponentT = AllTypeElement & {
  rightSection?: React.ReactNode;
  placeholder?: string;
  name?: string;
  color?: 'grey' | 'default';
  fullWidth?: boolean;
  maxLength?: number;
  type?: typesForTextField;
  disabled?: boolean;
  className?: string;
  label?: string;
};

export const TextInputComponent = React.forwardRef(
  (
    {
      color = 'default',
      className,
      label,
      disabled,
      placeholder,
      rightSection,
      name,
      maxLength = 1000,
      fullWidth = false,
      type = 'text',
      ...props
    }: React.PropsWithoutRef<TextInputComponentT>,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <TextInput
        maxLength={maxLength}
        autoComplete="off"
        disabled={disabled}
        name={name}
        type={type}
        rightSection={rightSection ?? null}
        placeholder={placeholder}
        label={label}
        classNames={{
          input: clsx(
            styles.TextInput,
            rightSection && styles.rightSection,
            styles[color],
            className
          ),
          root: styles.Root,
        }}
        ref={ref}
        {...props}
      />
    );
  }
);

TextInputComponent.displayName = 'TextInputComponent';
