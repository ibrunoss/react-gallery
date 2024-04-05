import { MasonryGalleryImageProps } from "./types";

function MasonryGalleryImage({
  className,
  ...props
}: MasonryGalleryImageProps) {
  const imgClassName =
    "h-auto max-w-full rounded-lg object-cover object-center";
  return <img className={[imgClassName, className].join(" ")} {...props} />;
}

export default MasonryGalleryImage;
