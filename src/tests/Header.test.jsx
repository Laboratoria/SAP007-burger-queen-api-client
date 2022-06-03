import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import Header from "../components/Header";

describe("<Header />", () => {
  it("Renderiza um título corretamente", () => {
    render(<Header>Pedidos</Header>);
    const title = screen.getByText("Pedidos");
    expect(title).toBeInTheDocument();
  });
  it('Renderiza uma imagem corretamente', () => {
    render(<Header/>);
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
  });
});