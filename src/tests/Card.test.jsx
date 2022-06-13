import "@testing-library/jest-dom";
import { screen, render,waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import Card from "../components/Card";

describe("<Card />", () => {
  it("Renderiza um paragrafo corretamente", async() => {
    render(<Card />);
    const infoCard = {
      product:"café americano",
      price: "R$5,00",
      flavor: "null",
      qtd:"1",
    }
    console.log(infoCard)
    const product = screen.getByText("café americano")
    user.type(product, infoCard.product)
    const price = screen.getByText("R$5,00")
    user.type(price, infoCard.price)
    const flavor = screen.getByText("null")
    user.type(flavor, infoCard.flavor)
    const qtd = screen.getByText("1")
    user.type(qtd, infoCard.qtd)

    await waitFor(() => {
      expect(Card).toHaveBeenCalledWith(infoCard)
    });
    expect(Card).toHaveBeenCalledTimes(1)
  });
});