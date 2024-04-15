import styles from './SwiperProduct.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import 'swiper/css';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { loaderIMG } from '@lib';
import { CaretLeft, CaretRight } from 'phosphor-react';

type SwiperProductPropsT = {
  images?: {
    id: number;
    img: string | null;
  }[];
};

export const SwiperProduct: React.FC<SwiperProductPropsT> = ({ images }) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const swiperRef = useRef<SwiperType | null>();

  const [hasPrev, setHasPrev] = useState<boolean | undefined>(false);
  const [hasNext, setHasNext] = useState<boolean | undefined>(false);
  const [disabledNextButton, setDisabledNextButton] = useState<boolean>(false);
  const [disabledPrevButton, setDisabledPrevButton] = useState<boolean>(true);

  const swiperUpdater = (swiper: SwiperType) => {
    setDisabledPrevButton(swiper.isBeginning);
    setDisabledNextButton(swiper.isEnd);
  };

  useEffect(() => {
    if (swiperRef) {
      setHasNext(swiperRef.current?.allowSlideNext);
      setHasPrev(swiperRef.current?.allowSlidePrev);
    }
  }, [swiperRef]);

  const handleNextSlide = () => {
    swiperRef.current?.slideNext();
  };

  const handleBackSlide = () => {
    swiperRef.current?.slidePrev();
  };

  return (
    <div className={styles.SwiperProduct}>
      <div className={clsx(styles.PreviewButton)} onClick={handleBackSlide}>
        <CaretLeft size={32} />
      </div>
      <Swiper
        onSwiper={(swiper: SwiperType) => {
          swiperRef.current = swiper;
        }}
        onTransitionEnd={swiperUpdater}
        className={styles.Swiper}
        allowTouchMove={true}
        freeMode={true}
        watchSlidesProgress={true}
      >
        {!!images?.length &&
          images.map((item, i) => (
            <SwiperSlide
              key={item.id}
              className={clsx(
                styles.Swiper__slide,
                activeSlide === item.id && styles.Swiper__slide_active
              )}
            >
              <div className={styles.ContainerPrev}>
                {item?.img && (
                  <Image
                    onContextMenu={(e) => e.preventDefault()}
                    draggable={false}
                    loader={loaderIMG}
                    layout="fill"
                    alt={`Картинка ${i + 1}`}
                    objectFit={'contain'}
                    src={item?.img}
                  />
                )}
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <div
        className={clsx(
          styles.PreviewButton,
          disabledNextButton && styles.Preview__button_disabled
        )}
        onClick={handleNextSlide}
      >
        <CaretRight size={32} />
      </div>
    </div>
  );
};
