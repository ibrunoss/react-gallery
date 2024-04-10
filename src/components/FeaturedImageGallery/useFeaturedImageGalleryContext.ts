import { useContext } from "react";

import FeaturedImageGalleryContext from "./FeaturedImageGalleryContext";

export function useFeaturedImageGalleryContext() {
  const context = useContext(FeaturedImageGalleryContext);
  if (!context) {
    throw new Error(
      "useFeaturedImageGalleryContext must be used within an FeaturedImageGalleryContextProvider"
    );
  }
  return context;
}
