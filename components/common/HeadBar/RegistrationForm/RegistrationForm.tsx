import styles from './RegistrationForm.module.scss';
import { Button, TextInput } from '@components';
import { Text, Title } from '@mantine/core';
import { Controller, useForm } from 'react-hook-form';

type RegistrationFormPropsT = {
  toggleForm: () => void;
};

type RegistrationFormFieldT = {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  re_password: string;
};

export const RegistrationForm: React.FC<RegistrationFormPropsT> = ({
  toggleForm,
}) => {
  const {
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm<RegistrationFormFieldT>();

  const onSubmit = handleSubmit((data: RegistrationFormFieldT) => {
    console.log(data);
  });

  return (
    <div className={styles.LoginForm}>
      <div className={styles.LoginForm_title}>
        <Title order={2}>Регистрация</Title>
      </div>
      <form onSubmit={onSubmit} className={styles.LoginForm_form}>
        <Controller
          name="username"
          control={control}
          rules={{ required: 'Обязательное поле' }}
          render={({ field }) => (
            <TextInput
              {...field}
              name="Логин"
              label="Логин"
              placeholder="Логин"
              type="text"
              value={field.value?.toString()}
              color="grey"
              onChange={field.onChange}
            />
          )}
        />
        <Controller
          name="first_name"
          control={control}
          rules={{ required: 'Обязательное поле' }}
          render={({ field }) => (
            <TextInput
              {...field}
              label="Имя"
              placeholder="Имя"
              type="text"
              value={field.value?.toString()}
              color="grey"
              onChange={field.onChange}
            />
          )}
        />
        <Controller
          name="last_name"
          control={control}
          rules={{ required: 'Обязательное поле' }}
          render={({ field }) => (
            <TextInput
              label="Фамилия"
              placeholder="Фамилия"
              type="text"
              value={field.value?.toString()}
              color="grey"
              onChange={field.onChange}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          rules={{ required: 'Обязательное поле' }}
          render={({ field }) => (
            <TextInput
              label="Почта"
              placeholder="Почта"
              value={field.value?.toString()}
              type="email"
              color="grey"
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
              label="Пароль"
              placeholder="Пароль"
              type="password"
              value={field.value?.toString()}
              color="grey"
              onChange={field.onChange}
            />
          )}
        />
        <Controller
          name="re_password"
          control={control}
          rules={{ required: 'Обязательное поле' }}
          render={({ field }) => (
            <TextInput
              label="Повторите пароль"
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
            <Text size="md">Регистрация</Text>
          </Button>
        </div>
      </form>
      <div className={styles.LoginForm_registration}>
        <Text>Уже есть аккаунт?</Text>&nbsp;
        <Text onClick={toggleForm} c={'blue'}>
          Войти
        </Text>
      </div>
    </div>
  );
};
