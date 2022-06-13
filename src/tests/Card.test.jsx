import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import Card from "../components/Card";

const product = {
  id: 123,
  name: "hambuguer",
  price: 5,
  flavor: "vegetariano",
};

describe("<Card />", () => {
  it("Renderiza um card corretamente", () => {
    const click = jest.fn()
    render(<Card product={product} onClick={click} />);

    const id = screen.getByText("123")
    expect(id).toBeInTheDocument()
    const name = screen.getByText(product.name)
    expect(name).toBeInTheDocument()
    const price = screen.getByText("R$5.00")
    expect(price).toBeInTheDocument()
    const flavor = screen.getByText(product.flavor)
    expect(flavor).toBeInTheDocument()

    const icon = screen.getByTestId("icon")
    user.click(icon)
    expect(click).toHaveBeenCalledTimes(1)
  });
});



