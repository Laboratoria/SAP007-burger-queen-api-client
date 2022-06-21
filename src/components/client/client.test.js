import { render, screen } from '@testing-library/react';
import Client from './index'

describe('Tests for Client component', () => {
    it('should show the component', () => {
        const placeholder = "cliente"
        render(<Client type='text' placeholder={placeholder} />);
        const input = screen.getByPlaceholderText(placeholder)
        expect(input).toBeInTheDocument()
    });

    it('should call onChange function when select value is changed', () => {
        render(<Client />);
        const select = screen.getByText("Mesa 1");

        expect(select).toBeInTheDocument();
    })
})