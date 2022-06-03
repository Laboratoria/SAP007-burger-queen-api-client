import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Login from '../pages/Login.jsx';

describe('Login', () => {
    it('Must be a function', () => {
        expect(typeof Login).toBe('function');
    });

    it('Should trigger a click function', () => {
        const text = 'Entrar';
        const onClick = jest.fn(); //o que essa const ta fazendo?
        render(<button onClick={onClick}>{text}</button>);

        expect(onClick).toHaveBeenCalledTimes(0);
        user.click(screen.getByText(text));
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});