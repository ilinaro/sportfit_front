import { ProductT } from '@types';
import styles from './ProductList.module.scss';

type ProductListT = {
  results?: ProductT[];
};

export const ProductList: React.FC<ProductListT> = ({ results }) => {
  return (
    <div className={styles.ProductList}>
      {results &&
        !!results?.length &&
        results.map((product) => (
          <div key={product.id} className={styles.Product}>
            {product.name}
          </div>
        ))}
    </div>
  );
};
