import React from "react";
import { FeaturedImageGalleryImgProps } from "./types";
import { useFeaturedImageGalleryContext } from "./useFeaturedImageGalleryContext";

function FeaturedImageGalleryImg({
  index,
  onClick: onClickProp,
  ...imgProps
}: FeaturedImageGalleryImgProps) {
  const { setCurrentImageIndex, setImageActive } =
    useFeaturedImageGalleryContext();

  function onClick(e: React.MouseEvent<HTMLImageElement, MouseEvent>) {
    setCurrentImageIndex(index);
    setImageActive({ ...imgProps, onClick: onClickProp });
    onClickProp?.(e);
  }
  return (
    <img
      className="h-auto max-w-full rounded-lg cursor-pointer"
      onClick={onClick}
      {...imgProps}
    />
  );
}

export default FeaturedImageGalleryImg;
