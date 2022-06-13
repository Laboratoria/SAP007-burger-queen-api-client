import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import Button from "../components/Button";

describe("<Button />", () => {
  it("Renderiza um botão corretamente", () => {
    render(<Button>Logar</Button>);
    const button = screen.getByText("Logar");
    expect(button).toBeInTheDocument();
  });
  it("deverá disparar uma função de click", () => {
    const text = "Cadastrar"
    const onClick = jest.fn();
    render(<Button onClick={onClick}>{text}</Button>);
  
    expect(onClick).toHaveBeenCalledTimes(0);
    user.click(screen.getByText(text));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});