import { render, screen } from '@testing-library/react';
import Error from './index';

describe('Tests for Error component', () => {
    it('should show a Error with text', () => {
      const text = "Inválido";
      render(<Error text={text} />);
      const message = screen.getByText(text);
      expect(message).toBeInTheDocument();
      expect(message).toHaveTextContent("Inválido");
    });
  });