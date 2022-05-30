import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import Input from "../components/Input";


describe("<Input />", () => {
  it("Renderiza um input corretamente", () => {
    render(<Input placeholder="EMAIL" />);
    const input = screen.getByPlaceholderText("EMAIL");
    expect(input).toBeInTheDocument();
  });
});

