import { GalleryImageProps } from "@/types";

export type FeaturedImageGalleryContextData = {
  currentImageIndex: number;
  setCurrentImageIndex: (value: number) => void;
  imageActive?: GalleryImageProps;
  setImageActive: (img?: GalleryImageProps) => void;
};
export type FeaturedImageGalleryDisplayProps = {
  imageFallback?: GalleryImageProps;
};

export type FeaturedImageGalleryImgProps = {
  index: number;
} & GalleryImageProps;
