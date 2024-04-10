import styles from './HeadBar.module.scss';
import { Text } from '@mantine/core';
import { SignIn } from 'phosphor-react';

export const HeadBar: React.FC = () => {
  return (
    <div className={styles.HeadBar}>
      <div>SPORTFIT</div>
      <div>
        <div className={styles.Login}>
          <div>
            <Text size="md">Войти</Text>
          </div>
          <SignIn size={22} />
        </div>
      </div>
    </div>
  );
};
