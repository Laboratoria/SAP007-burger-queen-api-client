import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import App from '../App';
import Button from '../components/Button';


describe('<Button />', () => {
    it('Renderiza um botão corretamente', () => {
      renderWithTheme(<Button>conteudo</Button>);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
      expect(button).toMatchSnapshot();
    });
  }