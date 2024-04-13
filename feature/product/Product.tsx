import { Text } from '@mantine/core';
import styles from './Product.module.scss';

type ProductT = {
  id: number | null;
};

const ProductNotFound: JSX.Element = (
  <div className={styles.Product_notfound}>
    <Text c={'grey'} size="xl">
      Страница товара не найдена
    </Text>
  </div>
);

export const Product: React.FC<ProductT> = ({ id }) => {
  if (!id) {
    return ProductNotFound;
  }

  return (
    <div className={styles.Product}>
      <div className={styles.Product_header}></div>
      <div className={styles.Product__block}>
        <div className={styles.Product__block_img}></div>
        <div className={styles.Product__block_options}></div>
      </div>
      <div className={styles.Product_description}></div>
    </div>
  );
};
