import { MasonryGalleryGridProps } from "./types";

function MasonryGalleryGrid({ children }: MasonryGalleryGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">{children}</div>
  );
}

export default MasonryGalleryGrid;
