import Image from 'next/image';
import { loaderIMG } from '@lib';
import styles from './Card.module.scss';
import { ProductT } from '@types';
import { Text } from '@mantine/core';
import { Heart, House, Scan, NoteBlank, SignIn, HeartBreak } from 'phosphor-react';
import { numberWithSpaces } from '@utils';
type CardT = {
    product?: ProductT
}

export const Card: React.FC<CardT> = ({ product }) => {
    return (
        <div className={styles.Card}>
            {
                !!product?.discount &&
                <div className={styles.Card_discount}>
                    <Text fw={700}>{product?.discount} %</Text>
                </div>
            }
            <div className={styles.Card_like}>
                <Heart size={22} color={'red'}/>
            </div>
            <div className={styles.Card_img}>
                {
                    !product?.img && <div className={styles.NoImage}>
                        <NoteBlank size={32} />
                    </div>
                }
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
            <div className={styles.Card_option}>
                <div className={styles.Card_price}>
                    {!product?.discount_price ?
                        <div>
                            <Text fw={700}>{numberWithSpaces(product?.price)}</Text>
                        </div>
                        :
                        <div className={styles.Card_discountPrice}>
                            <Text>{numberWithSpaces(product?.price)}</Text>
                            <Text fw={700}>{numberWithSpaces(product?.discount_price)}</Text>
                        </div>
                    }
                    <div className={styles.Card_category}>
                    <Text size='sm'>{product?.category}</Text>
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
    )
}