import { ImageLoader } from 'next/image';

export const loaderIMG: ImageLoader = ({ src, width, quality }) => {
  return `${process.env.IMG_URL + src}?w=${width}&q=${quality || 75}`;
};
