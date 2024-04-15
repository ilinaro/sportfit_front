import { Button } from '@components';
import styles from './Home.module.scss';
import { ProductList } from './ProductList';
import { Text } from '@mantine/core';
import { useGetProductsAllQuery } from '@lib';

export const Home: React.FC = () => {
  const { data, hasNextPage, fetchNextPage } = useGetProductsAllQuery();

  return (
    <div className={styles.Home}>
      {data?.pages.map((page) => (
        <ProductList key={page?.data?.next} results={page?.data?.results} />
      ))}
      {hasNextPage && (
        <div className={styles.NextList}>
          <Button onClick={async () => await fetchNextPage()}>
            <Text>Показать еще</Text>
          </Button>
        </div>
      )}
    </div>
  );
};
