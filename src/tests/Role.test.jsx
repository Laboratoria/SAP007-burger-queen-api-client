import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import Role from "../components/Button";

describe("<Role />", () => {
  it("Renderiza um label corretamente", () => {
    render(<Role>Cozinha</Role>);
    const label = screen.getByText("Cozinha");
    expect(label).toBeInTheDocument();
  });
  it("Renderiza outra opção de label corretamente", () => {
    render(<Role>Salão</Role>);
    const label = screen.getByText("Salão");
    expect(label).toBeInTheDocument();
  });
});