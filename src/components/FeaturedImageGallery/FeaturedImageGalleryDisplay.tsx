import { useFeaturedImageGalleryContext } from "./useFeaturedImageGalleryContext";
import { FeaturedImageGalleryDisplayProps } from "./types";

function FeaturedImageGalleryDisplay({
  imageFallback,
}: Readonly<FeaturedImageGalleryDisplayProps>) {
  const { imageActive } = useFeaturedImageGalleryContext();

  const imgClassName = [
    "h-auto",
    "w-full",
    "max-w-full",
    "rounded-lg",
    "object-cover",
    "object-center",
  ];

  if (imageActive?.className) {
    imgClassName.join(imageActive.className);
    delete imageActive.className;
  }

  const imgProps = imageActive ?? imageFallback;

  return <img className={imgClassName.join(" ")} {...imgProps} />;
}

export default FeaturedImageGalleryDisplay;
