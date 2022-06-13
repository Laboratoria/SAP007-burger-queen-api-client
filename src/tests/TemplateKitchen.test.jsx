import "@testing-library/jest-dom";
import { screen, render, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import TemplateKitchen from "../components/TemplateKitchen";

describe("<TemplateKitchen />", () => {
  it("Renderizar uma UL com as informações da comanda", async () => {
    render(<TemplateKitchen />);
    const infosKitchen = {
      client: "Tania Mara",
      mesa: "3",
      product: "café americano",
      price: "R$5,00",
      flavor: "null",
      qtd: "1",
    }
    console.log(infosKitchen)
    const product = screen.getByText("café americano")
    user.type(product, infosKitchen.product)
    const price = screen.getByText("R$5,00")
    user.type(price, infosKitchen.price)
    const flavor = screen.getByText("null")
    user.type(flavor, infosKitchen.flavor)
    const qtd = screen.getByText("1")
    user.type(qtd, infosKitchen.qtd)

    await waitFor(() => {
      expect(TemplateKitchen).toHaveBeenCalledWith(infosKitchen)
    });
    expect(TemplateKitchen).toHaveBeenCalledTimes(1)
  });
});