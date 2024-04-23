import styles from './LoginForm.module.scss';
import { Button, TextInput } from '@components';
import { Text, Title } from '@mantine/core';
import { Controller, useForm } from 'react-hook-form';

type LoginFormPropsT = {
  toggleForm: () => void;
};

type LoginFormFieldT = {
  username: string;
  password: string;
};

export const LoginForm: React.FC<LoginFormPropsT> = ({ toggleForm }) => {
  const {
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm<LoginFormFieldT>();

  const onSubmit = handleSubmit((data: LoginFormFieldT) => {
    console.log(data);
  });

  return (
    <div className={styles.LoginForm}>
      <div className={styles.LoginForm_title}>
        <Title order={2}>Авторизация</Title>
      </div>
      <div>
        <form onSubmit={onSubmit} className={styles.LoginForm_form}>
          <Controller
            name="username"
            control={control}
            rules={{ required: 'Обязательное поле' }}
            render={({ field }) => (
              <TextInput
                {...field}
                label="Логин"
                placeholder="Логин"
                value={field.value?.toString()}
                color="grey"
                type="text"
                onChange={field.onChange}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{ required: 'Обязательное поле' }}
            render={({ field }) => (
              <TextInput
                {...field}
                label="Пароль"
                placeholder="Пароль"
                type="password"
                color="grey"
                value={field.value?.toString()}
                onChange={field.onChange}
              />
            )}
          />
          <div className={styles.LoginForm_submit}>
            <Button type="submit" fullWidth>
              <Text size="md">Войти</Text>
            </Button>
          </div>
        </form>
        <div className={styles.LoginForm_registration}>
          <Text>Нету аккаунта?</Text>&nbsp;
          <Text onClick={toggleForm} c={'blue'}>
            Регистрация
          </Text>
        </div>
      </div>
    </div>
  );
};
