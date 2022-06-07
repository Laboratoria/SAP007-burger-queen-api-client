import { render, screen } from "@testing-library/react";
import Cart from "./index";

describe("Tests for Cart component", () => {
  const newList = [
    {
      id: "87289",
      name: "Hamburguer",
      price: 10,
      flavor: "frango",
      complement: "ovo",
      qtd: 1,
    },
  ];

  it("should render the product with product name", () => {
    render(<Cart orderList={newList} />);
    const name = screen.getByText(newList[0].name);

    expect(name).toBeInTheDocument();
    expect(name).toHaveTextContent("Hamburguer");
  });

  // it("should render the product with product flavor", () => {
  //   render(<Card product={product} />);
  //   const flavor = screen.getByText(product.flavor);

  //   expect(flavor).toBeInTheDocument();
  //   expect(flavor).toHaveTextContent("frango");
  // });
});
