import { render, screen, fireEvent } from '@testing-library/react';
import Button from './index';

describe('Tests for Button component', () => {
    // it('should show a button with text', () => {
    //   const nome = "Botão";
    //   render(<Button>{nome}</Button>);
    //   const btn = screen.getByText(nome)
    //   expect(btn).toBeInTheDocument();
    // });
  
    it('should call a function by click', () => {
      const onClick = jest.fn()
      render(<Button onClick={onClick}/>)
      const btn = screen.getByRole('button')
      expect(onClick).toHaveBeenCalledTimes(0)
      fireEvent.click(btn)
      expect(onClick).toHaveBeenCalledTimes(1)
    })
  });