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

type TextInputComponentT = {
  rightSection?: React.ReactNode;
  placeholder?: string;
  name?: string;
  fullWidth?: boolean;
  maxLength?: number;
  type?: typesForTextField;
  disabled?: boolean;
  className?: string;
};

export const TextInputComponent = React.forwardRef(
  (
    {
      className,
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
        classNames={{
          input: clsx(
            styles.TextInput,
            rightSection && styles.rightSection,
            className
          ),
        }}
        ref={ref}
        {...props}
      />
    );
  }
);

TextInputComponent.displayName = 'TextInputComponent';
