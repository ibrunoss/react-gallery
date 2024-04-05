import MasonryGalleryColumn from "./MasonryGalleryColumn";
import MasonryGalleryGrid from "./MasonryGalleryGrid";
import MasonryGalleryImage from "./MasonryGalleryImage";
import { MasonryGalleryProps } from "./types";

function MasonryGallery({ images, imagesPerColumn = 1 }: MasonryGalleryProps) {
  function splitImagesPerColumn() {
    const split: (typeof images)[] = [];
    for (let i = 0; i < images.length; i += imagesPerColumn) {
      split.push(images.slice(i, i + imagesPerColumn));
    }
    return split;
  }
  const gallery = splitImagesPerColumn();
  return (
    <MasonryGalleryGrid>
      {gallery.map((colums, idx) => (
        <MasonryGalleryColumn key={idx}>
          {colums.map((img) => (
            <MasonryGalleryImage key={img.src} {...img} />
          ))}
        </MasonryGalleryColumn>
      ))}
    </MasonryGalleryGrid>
  );
}

MasonryGallery.Column = MasonryGalleryColumn;
MasonryGallery.Grid = MasonryGalleryGrid;
MasonryGallery.Image = MasonryGalleryImage;

export default MasonryGallery;
