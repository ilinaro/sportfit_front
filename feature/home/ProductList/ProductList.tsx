import { ProductT } from '@types';
import styles from './ProductList.module.scss';
import Image from 'next/image';
import { loaderIMG } from '@lib';

type ProductListT = {
  results?: Partial<ProductT[]>;
};

export const ProductList: React.FC<ProductListT> = ({ results }) => {
  return (
    <div className={styles.ProductList}>
      {results &&
        !!results?.length &&
        results.map((product) => (
          <div key={product?.id} className={styles.Product}>
            <div className={styles.Product_img}>
              {product?.img && (
                <Image
                  src={product.img}
                  alt={`${product?.name}`}
                  fill
                  objectFit="cover"
                  loader={loaderIMG}
                />
              )}
            </div>
            <div>{product?.name}</div>
          </div>
        ))}
    </div>
  );
};
