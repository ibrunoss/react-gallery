import { createContext } from "react";

import { FeaturedImageGalleryContextData } from "./types";

const initialValue: FeaturedImageGalleryContextData = {
  currentImageIndex: 0,
  setCurrentImageIndex(value) {
    Math.pow(value, 2);
  },
  setImageActive() {},
};

const FeaturedImageGalleryContext =
  createContext<FeaturedImageGalleryContextData>(initialValue);

export default FeaturedImageGalleryContext;
