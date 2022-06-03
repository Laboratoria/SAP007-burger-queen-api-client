import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Button from '../components/Button.jsx';

describe('<Button />', () => {
    it('Render a button', () => {
        render(<Button>Entrar</Button>);
        const textButton = screen.getByText('Entrar');
        expect(textButton).toBeInTheDocument();
    });
});