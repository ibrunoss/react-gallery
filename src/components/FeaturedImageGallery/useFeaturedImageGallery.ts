import { useState } from "react";

import { GalleryImageProps } from "@/types";

function useFeaturedImageGallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageActive, setImageActive] = useState<GalleryImageProps>();

  function updateCurrentImageIndex(newValue: number) {
    setCurrentImageIndex(() => newValue);
  }

  function updateImageActive(img?: GalleryImageProps) {
    setImageActive(() => img);
  }
  return {
    updateCurrentImageIndex,
    updateImageActive,
    imageActive,
    currentImageIndex,
  };
}

export default useFeaturedImageGallery;
