import { DivWithRequiredChildren } from "@/types";

function FeaturedImageGalleryControlGrid({
  className,
  ...props
}: DivWithRequiredChildren) {
  const divClassName = ["grid grid-cols-5 gap-4"];

  if (className) {
    divClassName.push(className);
  }

  return <div className={divClassName.join(" ")} {...props} />;
}

export default FeaturedImageGalleryControlGrid;
