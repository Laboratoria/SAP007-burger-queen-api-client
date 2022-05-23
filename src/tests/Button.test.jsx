import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import Button from '../components/Button';

describe('<Button />', () => {
  it('Renderiza um botão corretamente', () => {
    render(<Button>Logar</Button>);
    const button = screen.getByText("Logar");
    expect(button).toBeInTheDocument();
  });
})