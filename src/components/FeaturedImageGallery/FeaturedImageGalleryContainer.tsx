import { DivWithRequiredChildren } from "@/types";

function FeaturedImageGalleryContainer({
  children,
  className,
  ...props
}: DivWithRequiredChildren) {
  const gridClassName = ["grid gap-4"];

  if (className) {
    gridClassName.push(className);
  }
  return (
    <div className={gridClassName.join(" ")} {...props}>
      {children}
    </div>
  );
}

export default FeaturedImageGalleryContainer;
