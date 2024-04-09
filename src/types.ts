import { ImgHTMLAttributes } from "react";

export type GalleryImageProps = {
  src: string;
} & ImgHTMLAttributes<HTMLImageElement>;
