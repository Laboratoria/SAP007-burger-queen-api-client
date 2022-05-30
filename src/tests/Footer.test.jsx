import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import Footer from "../components/Footer";

describe("<Footer />", () => {
  it("Renderiza um rodapé corretamente", () => {
    render(<Footer />);
    const links = screen.getAllByRole("link");
    expect(links.length).toEqual(2);
  });
});
