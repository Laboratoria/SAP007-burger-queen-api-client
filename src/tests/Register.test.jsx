import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Register from '../pages/Register.jsx';

describe ('Register', () => {
    it('must be a function' , () => {
        expect(typeof Register).toBe('function');
    });
    it('Should trigger a click function', () => {
        const text = 'Cadastrar';
        const onClick = jest.fn();
        render(<button onClick={onClick}>{text}</button>);

        expect(onClick).toHaveBeenCalledTimes(0);
        user.click(screen.getByText(text));
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});