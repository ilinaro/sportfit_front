import styles from './ErrorPage.module.scss';

import clsx from 'clsx';
import { useRouter } from 'next/router';
import { FC } from 'react';

type ErrorPageProps = {
  className?: string;
};

export const ErrorPage: FC<ErrorPageProps> = ({ className }) => {
  const { reload } = useRouter();

  return (
    <div className={clsx(styles.errorPage, className)}>
      <div className={styles.errorPage__content}>
        <h1 className={styles.errorPage__title}>Что-то пошло не так</h1>
        <button onClick={reload}>Обновить страницу</button>
      </div>
    </div>
  );
};
