import { Button } from '@components/ui';
import styles from './HeadBar.module.scss';
import { Text, TextInput, Title } from '@mantine/core';
import { SignIn } from 'phosphor-react';
import { useAppSelector } from '@lib';
import clsx from 'clsx';
import Link from 'next/link';

export const HeadBar: React.FC = () => {
  const { isMobile } = useAppSelector((state) => state.isMobile);
  return (
    <div
      className={clsx(styles.HeadBar, { [styles.HeadBar_isMobile]: isMobile })}
    >
      <div className={styles.Logo}>
        <Link href={'/'}>
          <Title order={isMobile ? 4 : 1}>SportPit</Title>
        </Link>
      </div>
      <div className={styles.List}>
        <Text size={'lg'}>Бады</Text>
        <Text size={'lg'}>Витамины</Text>
        <Text size={'lg'}>Креатин</Text>
        <Text size={'lg'}>Протеины</Text>
      </div>
      {!isMobile && (
        <div className={styles.LoginSection}>
          <Button color={'white'}>
            <div className={styles.Login}>
              <Text size="md">Войти</Text>
              <SignIn size={22} />
            </div>
          </Button>
        </div>
      )}
    </div>
  );
};
