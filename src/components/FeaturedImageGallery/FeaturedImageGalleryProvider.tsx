import React, { useState } from "react";

import FeaturedImageGalleryContext from "./FeaturedImageGalleryContext";
import { GalleryImageProps } from "@/types";
import { FeaturedImageGalleryContextData } from "./types";

export function FeaturedImageGalleryProvider({
  children,
}: Readonly<React.PropsWithChildren>) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageActive, setImageActive] = useState<GalleryImageProps>();

  function updateCurrentImageIndex(newValue: number) {
    setCurrentImageIndex(() => newValue);
  }

  function updateImageActive(img?: GalleryImageProps) {
    setImageActive(() => img);
  }

  const contextValue: FeaturedImageGalleryContextData = React.useMemo(
    () => ({
      currentImageIndex,
      setCurrentImageIndex: updateCurrentImageIndex,
      imageActive,
      setImageActive: updateImageActive,
    }),
    [currentImageIndex, imageActive]
  );

  console.log(imageActive);
  return (
    <FeaturedImageGalleryContext.Provider value={contextValue}>
      {children}
    </FeaturedImageGalleryContext.Provider>
  );
}

export default FeaturedImageGalleryProvider;
