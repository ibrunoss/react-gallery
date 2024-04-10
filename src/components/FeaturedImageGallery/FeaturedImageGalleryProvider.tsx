import React from "react";

import FeaturedImageGalleryContext from "./FeaturedImageGalleryContext";
import useFeaturedImageGallery from "./useFeaturedImageGallery";

export function FeaturedImageGalleryProvider({
  children,
}: Readonly<React.PropsWithChildren>) {
  const {
    currentImageIndex,
    imageActive,
    updateCurrentImageIndex: setCurrentImageIndex,
    updateImageActive: setImageActive,
  } = useFeaturedImageGallery();

  return (
    <FeaturedImageGalleryContext.Provider
      value={{
        currentImageIndex,
        setCurrentImageIndex,
        imageActive,
        setImageActive,
      }}
    >
      {children}
    </FeaturedImageGalleryContext.Provider>
  );
}

export default FeaturedImageGalleryProvider;
