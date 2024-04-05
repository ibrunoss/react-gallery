import { ReactNode } from "react";

export type MasonryGalleryProps = {
  images: MasonryGalleryImageProps[];
  imagesPerColumn?: number;
};

export type MasonryGalleryGridProps = {
  children: ReactNode;
};

export type MasonryGalleryColumnProps = {
  children: ReactNode;
};

export type MasonryGalleryImageProps = {
  src: string;
} & React.ImgHTMLAttributes<HTMLImageElement>;
