import { render, screen } from "@testing-library/react";
import Card from "./index";

describe("Tests for Card component", () => {
  const product = {
    name: "hamburguer",
    flavor: "frango",
    complement: "ovo",
    price: 10,
  };

  it("should render the product with product name", () => {
    render(<Card product={product} />);
    const name = screen.getByText(product.name);

    expect(name).toBeInTheDocument();
    expect(name).toHaveTextContent("hamburguer");
  });

  // it("should render the product with product flavor", () => {
  //   render(<Card product={product} />);
  //   const flavor = screen.getByText(product.flavor);

  //   expect(flavor).toBeInTheDocument();
  //   expect(flavor).toHaveTextContent("frango");
  // });
});
