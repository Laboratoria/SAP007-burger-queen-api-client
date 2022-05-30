import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import Logo from "../components/Logo";

  describe('<Logo />', () => {
    it('Renderiza a logo corretamente', () => {
      render(<Logo/>);
      const logo= screen.getByRole("img");
      expect(logo).toBeInTheDocument();
    });
  });
