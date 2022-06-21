import { render, screen } from "@testing-library/react";
import Cart from "./index";

describe("Tests for Cart component", () => {
  const newList = 
    [{
      id: "87289",
      name: "Hamburguer",
      price: 10,
      flavor: "frango",
      complement: "ovo",
      qtd: 1,
    }];

  it("should render the product with product name", () => {
    render(<Cart orderList={newList} />);
    const product = screen.getByText("Hamburguer Frango Ovo");
    const price = screen.getByText("10")

    expect(product).toBeInTheDocument();
    expect(product).toHaveTextContent("Hamburguer Frango Ovo");
    expect(price).toBeInTheDocument();
    expect(price).toHaveTextContent("10");
  });
});
