import { renderHook } from "@/test/utils";
import { render } from "@testing-library/react";

import FeaturedImageGalleryDisplay from "./FeaturedImageGalleryDisplay";
import FeaturedImageGalleryContext from "./FeaturedImageGalleryContext";
import useFeaturedImageGallery from "./useFeaturedImageGallery";

describe("FeaturedImageGalleryDisplay", () => {
  it("renders image with correct props", () => {
    const imageFallback = { src: "fallback.jpg", alt: "Fallback Image" };
    const { result } = renderHook(useFeaturedImageGallery);

    const { getByAltText } = render(
      <FeaturedImageGalleryContext.Provider
        value={{
          currentImageIndex: result.current.currentImageIndex,
          setCurrentImageIndex: result.current.updateCurrentImageIndex,
          imageActive: {
            src: "test.jpg",
            alt: "Test Image",
          },
          setImageActive: result.current.updateImageActive,
        }}
      >
        <FeaturedImageGalleryDisplay imageFallback={imageFallback} />
      </FeaturedImageGalleryContext.Provider>
    );

    expect(getByAltText("Test Image")).toBeInTheDocument();
  });

  it("renders image with custom className if provided", () => {
    const imageFallback = { src: "fallback.jpg", alt: "Fallback Image" };
    const { result } = renderHook(useFeaturedImageGallery);

    const { getByAltText } = render(
      <FeaturedImageGalleryContext.Provider
        value={{
          currentImageIndex: result.current.currentImageIndex,
          setCurrentImageIndex: result.current.updateCurrentImageIndex,
          imageActive: {
            src: "test.jpg",
            alt: "Test Image",
            className: "custom-class",
          },
          setImageActive: result.current.updateImageActive,
        }}
      >
        <FeaturedImageGalleryDisplay imageFallback={imageFallback} />
      </FeaturedImageGalleryContext.Provider>
    );

    const imageElement = getByAltText("Test Image");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveClass("custom-class");
  });
});
