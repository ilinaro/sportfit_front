import { Text, Title } from '@mantine/core';
import styles from './Product.module.scss';
import { correctNumber, numberWithSpaces } from '@utils';
import { useEffect, useState } from 'react';
import { Heart, Minus, Plus } from 'phosphor-react';
import { EstimationBlock, Button } from '@components';
import { SwiperProduct } from '@components/common/SwiperProduct/SwiperProduct';
import { ProductT } from '@types';

type ProductPropsT = {
  product?: ProductT | null;
};

const ProductNotFound: JSX.Element = (
  <div className={styles.Product_notfound}>
    <Text c={'grey'} size="xl">
      Страница товара не найдена
    </Text>
  </div>
);

export const Product: React.FC<ProductPropsT> = ({ product }) => {
  const [count, setCount] = useState<number>(1);

  useEffect(() => {
    setCount(product?.quantity && product?.quantity > 0 ? 1 : 0);
  }, [product]);

  const handlerAdd = () => {
    if (!product?.quantity) return;
    if (count === product?.quantity) return;
    setCount((prev) => prev + 1);
  };

  const handlerRemove = () => {
    if (!product?.quantity) {
      setCount(0);
    }
    if (count < 2) return;
    setCount((prev) => prev - 1);
  };

  const hanlerProductLike = () => {
    if (!product?.id) return;
    console.log(product?.id);
  };

  return (
    <div className={styles.Product}>
      {product === null || !product ? (
        ProductNotFound
      ) : (
        <>
          <div className={styles.Product_header}>
            <Title order={2}>{product?.name}</Title>
          </div>
          <div className={styles.Product__block}>
            <div className={styles.Product__block_img}>
              {!!product?.discount && (
                <div className={styles.Product_discount}>
                  <Text fw={700}>
                    {product?.discount && `${product.discount}`.split('.')[0]} %
                  </Text>
                </div>
              )}
              <div className={styles.Product_like} onClick={hanlerProductLike}>
                <Heart size={22} />
              </div>
              <SwiperProduct images={product?.images} />
            </div>
            <div className={styles.Product__block_options}>
              <div>
                <div className={styles.Product__block_head}>
                  <EstimationBlock
                    size={20}
                    estimation={correctNumber(product?.avg_rating || 0)}
                  />
                  {!!product?.category && (
                    <div className={styles.Product_category}>
                      {product?.category}
                    </div>
                  )}
                </div>
                {!product?.discount_price ? (
                  <div>
                    <Text size="lg" fw={700}>
                      {numberWithSpaces(product?.price)}
                    </Text>
                  </div>
                ) : (
                  <div className={styles.Product_discountPrice}>
                    <Text size="lg">{numberWithSpaces(product?.price)}</Text>
                    <Text size="lg" fw={700}>
                      {numberWithSpaces(product?.discount_price)}
                    </Text>
                  </div>
                )}
              </div>

              <div className={styles.Product_quantity}>
                <Text c={'gray'}>На складе: {product?.quantity || 0} шт</Text>
              </div>
              <div className={styles.Product_set}>
                <div>
                  <Button onClick={handlerRemove} color="grey">
                    <Minus size={15} />
                  </Button>
                  <Title order={4}>{count}</Title>
                  <Button onClick={handlerAdd} color="grey">
                    <Plus size={15} />
                  </Button>
                </div>
                <Button fullWidth disabled={!product?.quantity}>
                  <Text size="md">Добавить в корзину</Text>
                </Button>
              </div>
            </div>
          </div>
          {!!product?.description && (
            <div className={styles.Product_description}>
              <Title order={4}>Описание</Title>
              <Text>{product?.description}</Text>
            </div>
          )}
        </>
      )}
    </div>
  );
};
