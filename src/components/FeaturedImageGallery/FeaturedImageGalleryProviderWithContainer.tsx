import { DivWithRequiredChildren } from "@/types";
import FeaturedImageGalleryProvider from "./FeaturedImageGalleryProvider";
import FeaturedImageGalleryContainer from "./FeaturedImageGalleryContainer";

function FeaturedImageGalleryProviderWithContainer(
  props: DivWithRequiredChildren
) {
  return (
    <FeaturedImageGalleryProvider>
      <FeaturedImageGalleryContainer {...props} />
    </FeaturedImageGalleryProvider>
  );
}

export default FeaturedImageGalleryProviderWithContainer;
