import { FeaturedImageGalleryProps } from "./types";
import FeaturedImageGalleryContainer from "./FeaturedImageGalleryContainer";
import FeaturedImageGalleryControlGrid from "./FeaturedImageGalleryControlGrid";
import FeaturedImageGalleryDisplay from "./FeaturedImageGalleryDisplay";
import FeaturedImageGalleryImg from "./FeaturedImageGalleryImg";
import FeaturedImageGalleryProvider from "./FeaturedImageGalleryProvider";
import FeaturedImageGalleryProviderWithContainer from "./FeaturedImageGalleryProviderWithContainer";

function FeaturedImageGallery({ images }: Readonly<FeaturedImageGalleryProps>) {
  return (
    <FeaturedImageGalleryProviderWithContainer>
      <FeaturedImageGalleryDisplay imageFallback={images[0]} />
      <FeaturedImageGalleryControlGrid>
        {images.map((imgProps, index) => (
          <FeaturedImageGalleryImg
            key={`${index}-${imgProps.src}`}
            index={index}
            {...imgProps}
          />
        ))}
      </FeaturedImageGalleryControlGrid>
    </FeaturedImageGalleryProviderWithContainer>
  );
}

FeaturedImageGallery.Container = FeaturedImageGalleryContainer;
FeaturedImageGallery.ControlGrid = FeaturedImageGalleryControlGrid;
FeaturedImageGallery.Display = FeaturedImageGalleryDisplay;
FeaturedImageGallery.Img = FeaturedImageGalleryImg;
FeaturedImageGallery.Provider = FeaturedImageGalleryProvider;
FeaturedImageGallery.ProviderWithContainer =
  FeaturedImageGalleryProviderWithContainer;

export default FeaturedImageGallery;
