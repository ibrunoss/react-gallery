import { render, fireEvent } from "@testing-library/react";

import FeaturedImageGalleryImg from "./FeaturedImageGalleryImg";
import { useFeaturedImageGalleryContext } from "./useFeaturedImageGalleryContext";

vi.mock("./useFeaturedImageGalleryContext");

describe("FeaturedImageGalleryImg", () => {
  it("calls setCurrentImageIndex and setImageActive on click", () => {
    const setCurrentImageIndexMock = vi.fn();
    const setImageActiveMock = vi.fn();
    useFeaturedImageGalleryContext.mockReturnValue({
      setCurrentImageIndex: setCurrentImageIndexMock,
      setImageActive: setImageActiveMock,
    });

    const index = 1;
    const onClickProp = vi.fn();
    const imgProps = { src: "image.jpg", alt: "Test Image" };
    const { getByAltText } = render(
      <FeaturedImageGalleryImg
        index={index}
        onClick={onClickProp}
        {...imgProps}
      />
    );

    const imgElement = getByAltText("Test Image");
    fireEvent.click(imgElement);

    expect(setCurrentImageIndexMock).toHaveBeenCalledWith(index);
    expect(setImageActiveMock).toHaveBeenCalledWith({
      ...imgProps,
      onClick: onClickProp,
    });
    expect(onClickProp).toHaveBeenCalled();
  });

  it("renders img element with correct props", () => {
    const index = 1;
    const onClickProp = vi.fn();
    const imgProps = { src: "image.jpg", alt: "Test Image" };
    const { getByAltText } = render(
      <FeaturedImageGalleryImg
        index={index}
        onClick={onClickProp}
        {...imgProps}
      />
    );

    const imgElement = getByAltText("Test Image");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", "image.jpg");
    expect(imgElement).toHaveAttribute("alt", "Test Image");
  });
});
