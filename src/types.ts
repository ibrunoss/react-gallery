import { ImgHTMLAttributes, ReactNode, HTMLAttributes } from "react";

export type GalleryImageProps = {
  src: string;
} & ImgHTMLAttributes<HTMLImageElement>;

export type DivWithRequiredChildren = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;
