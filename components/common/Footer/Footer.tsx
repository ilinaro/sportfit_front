import { Text, Title } from '@mantine/core';
import styles from './Footer.module.scss';
import Link from 'next/link';
import { useAppSelector } from '@lib';

export const Footer: React.FC = () => {
  const { isMobile } = useAppSelector((state) => state.isMobile);
  return (
    <div className={styles.Footer}>
      <div className={styles.Logo}>
        <Link href={'/'}>
          <Title order={isMobile ? 4 : 1} c="white">
            SportPit
          </Title>
        </Link>
      </div>
      <div className={styles.Footer_wrapper}>
        <div>
          <Text c="blue">Каталог</Text>
          <div className={styles.List}>
            <Text>Бады</Text>
            <Text>Витамины</Text>
            <Text>Креатин</Text>
            <Text>Протеины</Text>
          </div>
        </div>
        <div>
          <Text c="blue">О нас</Text>
          <div className={styles.List}>
            <div>
              <Link
                href={'https://github.com/ilinaro'}
                passHref
                target="_blank"
              >
                <Text>Олег (Frontend)</Text>
              </Link>
            </div>
            <div>
              <Link
                href={'https://github.com/VKalaitanov'}
                passHref
                target="_blank"
              >
                <Text>Владимир (Backend)</Text>
              </Link>
            </div>
            <div>
              <Link
                href={'https://github.com/Ktulhu777/sitesportpit-back'}
                passHref
                target="_blank"
              >
                <Text>Адам (Backend)</Text>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
