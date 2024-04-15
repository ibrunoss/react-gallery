import { render } from "@testing-library/react";
import FeaturedImageGalleryControlGrid from "./FeaturedImageGalleryControlGrid";

describe("FeaturedImageGalleryControlGrid", () => {
  it("applies default class names correctly", () => {
    // Renderiza o componente sem uma classe CSS personalizada
    const { container } = render(
      <FeaturedImageGalleryControlGrid>
        <></>
      </FeaturedImageGalleryControlGrid>
    );

    // Verifica se as classes CSS padrão foram aplicadas corretamente
    const component = container.firstChild as HTMLElement;
    expect(component.classList.contains("grid")).toBe(true);
    expect(component.classList.contains("grid-cols-5")).toBe(true);
    expect(component.classList.contains("gap-4")).toBe(true);
  });

  it("applies custom class name correctly", () => {
    // Renderiza o componente com uma classe CSS personalizada
    const { container } = render(
      <FeaturedImageGalleryControlGrid className="custom-class">
        <></>
      </FeaturedImageGalleryControlGrid>
    );

    // Verifica se a classe CSS personalizada foi aplicada corretamente
    const component = container.firstChild as HTMLElement;
    expect(component.classList.contains("custom-class")).toBe(true);
  });

  it("passes props correctly", () => {
    // Define algumas props personalizadas
    const customProps = {
      id: "test-id",
      color: "green",
    };

    // Renderiza o componente com as props personalizadas
    const { container } = render(
      <FeaturedImageGalleryControlGrid {...customProps}>
        <></>
      </FeaturedImageGalleryControlGrid>
    );

    // Verifica se as props foram passadas corretamente
    const component = container.firstChild as HTMLElement;
    expect(component).toHaveAttribute("id", "test-id");
    expect(component).toHaveAttribute("color", "green");
  });
});
