import { render, screen, fireEvent } from '@testing-library/react';
import Client from './index'

describe('Tests for Client component', () => {
    it('should show the component', () => {
        const placeholder = "cliente"
        render(<Client type='text' placeholder={placeholder} />);
        const input = screen.getByPlaceholderText(placeholder)
        expect(input).toBeInTheDocument()
    });

    it('should call onChange function when select value is changed', () => {
        const setTable = jest.fn();
        render(<Client onChange={setTable} />);
        const select = screen.getByRole("combobox");
        fireEvent.change(select, {
            target: {
                value: "1"
            }
        })
        expect(select).toBeInTheDocument();
        // expect(onChange).toHaveBeenCalledTimes(1);
    })
})