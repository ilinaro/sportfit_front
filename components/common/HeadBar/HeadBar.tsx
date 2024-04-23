import { Button } from '@components';
import styles from './HeadBar.module.scss';
import { Text, Title } from '@mantine/core';
import { SignIn } from 'phosphor-react';
import { useAppSelector } from '@lib';
import clsx from 'clsx';
import Link from 'next/link';
import { useDisclosure } from '@mantine/hooks';
import { GlobalDrawer } from '../GlobalDrawer';

import { LoginForm } from './LoginForm';
import { RegistrationForm } from './RegistrationForm';
import { useState } from 'react';

export const HeadBar: React.FC = () => {
  const { isMobile } = useAppSelector((state) => state.isMobile);

  const [opened, { open, close }] = useDisclosure(false);

  const [toggleForm, setToggleForm] = useState(false);

  return (
    <>
      <GlobalDrawer opened={opened} close={close} open={open}>
        {!toggleForm && <LoginForm toggleForm={() => setToggleForm(true)} />}
        {toggleForm && (
          <RegistrationForm toggleForm={() => setToggleForm(false)} />
        )}
      </GlobalDrawer>
      <div
        className={clsx(styles.HeadBar, {
          [styles.HeadBar_isMobile]: isMobile,
        })}
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
            <Button color={'white'} onClick={open}>
              <div className={styles.Login}>
                <Text size="md">Войти</Text>
                <SignIn size={22} />
              </div>
            </Button>
          </div>
        )}
      </div>
    </>
  );
};
