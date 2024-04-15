import { act, renderHook } from "@testing-library/react";
import useFeaturedImageGallery from "./useFeaturedImageGallery";

describe("useFeaturedImageGallery", () => {
  it("should update current image index", () => {
    const { result } = renderHook(useFeaturedImageGallery);

    expect(result.current.currentImageIndex).toBe(0);

    act(() => {
      result.current.updateCurrentImageIndex(1);
    });

    expect(result.current.currentImageIndex).toBe(1);
  });

  it("should update image active", () => {
    const { result } = renderHook(useFeaturedImageGallery);
    expect(result.current.imageActive).toBeUndefined();

    act(() => {
      result.current.updateImageActive({ src: "teste" });
    });

    expect(result.current.imageActive?.src).toBe("teste");
  });
});
