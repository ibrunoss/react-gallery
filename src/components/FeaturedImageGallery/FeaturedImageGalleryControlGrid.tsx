import { Children } from "react";

import { DivWithRequiredChildren } from "@/types";

function FeaturedImageGalleryControlGrid({
  className,
  ...props
}: DivWithRequiredChildren) {
  const divClassName = ["grid grid-cols-5 gap-4"];

  if (className) {
    divClassName.join(className);
  }
  console.log(Children.count(props.children));
  return <div className={divClassName.join(" ")} {...props} />;
}

export default FeaturedImageGalleryControlGrid;
