import Image from 'next/image';
import { loaderIMG } from '@lib';
import styles from './Card.module.scss';
import { ProductT } from '@types';
import { Text } from '@mantine/core';
import { Heart, NoteBlank } from 'phosphor-react';
import { numberWithSpaces } from '@utils';
import { MouseEventHandler } from 'react';
import { useRouter } from 'next/router';
type CardT = {
  product?: ProductT;
  onClick?: MouseEventHandler;
};

export const Card: React.FC<CardT> = ({ product }) => {
  const { push } = useRouter();
  const handlerOpenProduct = () => {
    if (!product?.id) return;
    push(`/product/${product?.slug}`);
  };

  const hanlerProductLike = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    if (!product?.id) return;
    console.log(product?.id);
  };

  return (
    <div className={styles.Card} onClick={handlerOpenProduct}>
      {!!product?.discount && (
        <div className={styles.Card_discount}>
          <Text fw={700}>
            {product?.discount && `${product.discount}`.split('.')[0]} %
          </Text>
        </div>
      )}
      <div className={styles.Card_like} onClick={hanlerProductLike}>
        <Heart size={22} />
      </div>
      <div className={styles.Card_img}>
        {!product?.images[0]?.img && (
          <div className={styles.NoImage}>
            <NoteBlank size={32} />
          </div>
        )}
        {product?.images[0]?.img && (
          <Image
            src={product?.images[0].img}
            alt={`${product?.name}`}
            fill
            objectFit="cover"
            loader={loaderIMG}
          />
        )}
      </div>
      <div className={styles.Card_option}>
        <div className={styles.Card_price}>
          {!product?.discount_price ? (
            <div>
              <Text fw={700}>{numberWithSpaces(product?.price)}</Text>
            </div>
          ) : (
            <div className={styles.Card_discountPrice}>
              <Text>{numberWithSpaces(product?.price)}</Text>
              <Text fw={700}>{numberWithSpaces(product?.discount_price)}</Text>
            </div>
          )}
          <div className={styles.Card_category}>
            <Text size="sm">{product?.category}</Text>
          </div>
        </div>
        <div className={styles.Card_name}>
          <Text>{product?.name}</Text>
        </div>
        <div className={styles.Card_description}>
          <Text c={'gray'}>{product?.description}</Text>
        </div>
      </div>
    </div>
  );
};
