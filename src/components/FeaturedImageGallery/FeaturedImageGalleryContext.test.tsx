import { useContext } from "react";
import { renderHook } from "@/test/utils";

import FeaturedImageGalleryContext from "./FeaturedImageGalleryContext";

function obterContext() {
  // Obtém o contexto
  const useFeaturedImageGalleryContext = () => {
    const context = useContext(FeaturedImageGalleryContext);
    return context;
  };

  const { result } = renderHook(useFeaturedImageGalleryContext);

  return result;
}

describe("FeaturedImageGalleryContext", () => {
  it("provides default context values", () => {
    const context = obterContext();

    // Verifica se os valores padrão do contexto são fornecidos corretamente
    expect(context.current.currentImageIndex).toBe(0);
    expect(context.current.imageActive).toBeUndefined();
    expect(context.current.setCurrentImageIndex).toBeDefined();
    expect(context.current.setImageActive).toBeDefined();
  });

  it("provides setImageActive function", () => {
    const context = obterContext();
    context.current.setImageActive({ src: "test.jpg", alt: "alt teste" });

    // Verifica se a função `setImageActive` funciona corretamente
    expect(context.current.imageActive?.src).toBe("test.jpg");
    expect(context.current.imageActive?.alt).toBe("alt teste");
  });

  it("provides setCurrentImageIndex function", () => {
    const context = obterContext();
    context.current.setCurrentImageIndex(2);

    // Verifica se a função `setCurrentImageIndex` funciona corretamente
    expect(context.current.currentImageIndex).toBe(2);
  });
});
