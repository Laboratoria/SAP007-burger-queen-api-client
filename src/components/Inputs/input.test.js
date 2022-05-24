import { render, screen, fireEvent } from '@testing-library/react';
import Input from './index'

describe('Tests for Input component', () => {
    it('should show the component', () => {
        const placeholder = "email"
        render(<Input type='text' placeholder={placeholder} />);
        const input = screen.getByPlaceholderText(placeholder)
        expect(input).toBeInTheDocument()
    });

    it('should call onChange function when input value is changed', () => {
        const placeholder = "email"
        const onChange = jest.fn()
        render(<Input onChange={onChange} type='text' placeholder={placeholder} />);
        const input = screen.getByPlaceholderText(placeholder)
        fireEvent.change(input, {
            target: {
                value: 'email@email.com'
            }
        })
        expect(onChange).toHaveBeenCalledTimes(1)
    })
})