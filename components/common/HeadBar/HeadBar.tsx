import { Button } from '@components/ui';
import styles from './HeadBar.module.scss';
import { Text, TextInput, Title } from '@mantine/core';
import { SignIn } from 'phosphor-react';

export const HeadBar: React.FC = () => {
  return (
    <div className={styles.HeadBar}>
      <div className={styles.Logo}>
        <Title order={1}>SportPit</Title>
      </div>
      <div className={styles.List}>
        <Text size={'lg'}>Бады</Text>
        <Text size={'lg'}>Витамины</Text>
        <Text size={'lg'}>Креатин</Text>
        <Text size={'lg'}>Протеины</Text>
      </div>
      <div className={styles.LoginSection}>
        <Button color={'white'}>
          <div className={styles.Login}>
            <Text size="md">Войти</Text>
            <SignIn size={22} />
          </div>
        </Button>
      </div>
    </div>
  );
};
