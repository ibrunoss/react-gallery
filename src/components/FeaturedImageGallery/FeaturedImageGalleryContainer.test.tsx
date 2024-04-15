import { render } from "@testing-library/react";
import FeaturedImageGalleryContainer from "./FeaturedImageGalleryContainer";

describe("FeaturedImageGalleryContainer", () => {
  it("renders children correctly", () => {
    // Renderiza o componente com um filho de exemplo
    const { getByText } = render(
      <FeaturedImageGalleryContainer>
        <div>Test Child</div>
      </FeaturedImageGalleryContainer>
    );

    // Verifica se o filho está presente no DOM
    const testChild = getByText("Test Child");
    expect(testChild).toBeInTheDocument();
  });

  it("applies custom class name", () => {
    // Renderiza o componente com uma classe CSS personalizada
    const { container } = render(
      <FeaturedImageGalleryContainer className="custom-class">
        <div>Test Child</div>
      </FeaturedImageGalleryContainer>
    );

    // Verifica se a classe CSS personalizada foi aplicada corretamente
    const component = container.firstChild as HTMLElement;
    expect(component.classList.contains("custom-class")).toBe(true);
  });
});
