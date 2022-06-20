import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import TemplateOrder from "../components/TemplateOrder";

const infoComand = {
  name: "café americano",
  flavor: "null",
  price: "5.00",
  qtd: 1,
}
describe("<TemplateOrder />", () => {
  it("Renderizar uma UL com as informações da comanda", () => {
    const click = jest.fn()
    render(<TemplateOrder product={infoComand} onClickRemove={click} />);

    const name = screen.getByText("Produto:café americano")
    expect(name).toBeInTheDocument()
    const flavor = screen.getByText("null")
    expect(flavor).toBeInTheDocument()
    const price = screen.getByText("R$5.00")
    expect(price).toBeInTheDocument()
    const qtd = screen.getByText("Quantidade:1")
    expect(qtd).toBeInTheDocument()

    const icon = screen.getByTestId("icon")
    user.click(icon)
    expect(click).toHaveBeenCalledTimes(1)

  });
});