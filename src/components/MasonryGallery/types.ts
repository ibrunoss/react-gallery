import { ReactNode } from "react";
import { GalleryImageProps } from "@/types";

export type MasonryGalleryProps = {
  images: GalleryImageProps[];
  imagesPerColumn?: number;
};

export type MasonryGalleryGridProps = {
  children: ReactNode;
};

export type MasonryGalleryColumnProps = {
  children: ReactNode;
};
