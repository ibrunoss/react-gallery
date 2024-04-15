import { createContext } from "react";

import { FeaturedImageGalleryContextData } from "./types";

const initialValue: FeaturedImageGalleryContextData = {
  currentImageIndex: 0,
  imageActive: undefined,
  setCurrentImageIndex(value) {
    this.currentImageIndex = value;
  },
  setImageActive(img) {
    this.imageActive = img;
  },
};

const FeaturedImageGalleryContext =
  createContext<FeaturedImageGalleryContextData>(initialValue);

export default FeaturedImageGalleryContext;
