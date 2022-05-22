import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Input from '../components/Input';
import Logo from '../components/Logo';

describe('<Button />', () => {
    it('Renderiza um botão corretamente', () => {
      render(<Button text="text"/>);
      const text = "Logar"
      const button = screen.getByText(text);
      expect(button).toBeInTheDocument();
    });
  })

  describe('<Footer />', () => {
    it('Renderiza um rodapé corretamente', () => {
      render(<Footer/>);
      const footer= screen.getByText("footer");
      expect(footer).toBeInTheDocument();
    });
  })

  describe('<Input />', () => {
  it('Renderiza um input corretamente', () => {
    render(<Input placeholder="placeholder"/>);
    const input= screen.getAllByPlaceholderText("placeholder");
    expect(input).toBeInTheDocument();
  });
})

  describe('<Logo />', () => {
    it('Renderiza a logo corretamente', () => {
      render(<Logo/>);
      const logo= screen.getByRole("logo");
      expect(logo).toBeInTheDocument();
    });
  })
