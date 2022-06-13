import "@testing-library/jest-dom";
import { screen, render,waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import TemplateOrder from "../components/TemplateOrder";

describe("<TemplateOrder />", () => {
  it("Renderizar uma UL com as informações da comanda", async() => {
    render(<TemplateOrder />);
    const infoComand = {
      product:"café americano",
      price: "R$5,00",
      flavor: "null",
      qtd:"1",
    }
    console.log(infoComand)
    const product = screen.getByText("café americano")
    user.type(product, infoComand.product)
    const price = screen.getByText("R$5,00")
    user.type(price, infoComand.price)
    const flavor = screen.getByText("null")
    user.type(flavor, infoComand.flavor)
    const qtd = screen.getByText("1")
    user.type(qtd, infoComand.qtd)

    await waitFor(() => {
      expect(TemplateOrder).toHaveBeenCalledWith(infoComand)
    });
    expect(TemplateOrder).toHaveBeenCalledTimes(1)
  });
});