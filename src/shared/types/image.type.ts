import { ImageProps } from 'next/image';

export interface CustomImageProps extends Omit<ImageProps, 'width' | 'height'> {
  width?: number | string;
  height?: number | string;
}
