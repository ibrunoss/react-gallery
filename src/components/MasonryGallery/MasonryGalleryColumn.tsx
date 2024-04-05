import { MasonryGalleryColumnProps } from "./types";

function MasonryGalleryColumn({ children }: MasonryGalleryColumnProps) {
  return <div className="grid gap-4">{children}</div>;
}

export default MasonryGalleryColumn;
