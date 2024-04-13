import { ProductT } from '@types';
import styles from './ProductList.module.scss';
import { Card } from '@components';

type ProductListT = {
  results?: Partial<ProductT[]>;
};

export const ProductList: React.FC<ProductListT> = ({ results }) => {
  return (
    <div className={styles.ProductList}>
      {results &&
        !!results?.length &&
        results.map((product) => <Card key={product?.id} product={product} />)}
    </div>
  );
};
