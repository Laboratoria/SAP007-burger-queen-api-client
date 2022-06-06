import { render, screen } from '@testing-library/react';
import Card from './index';

describe('Tests for Card component', () => {
    const product = {
        name: "hamburguer",
        flavor: "frango",
        complement: "ovo",
        price: 10,
    }

  it('should render the product information provided', () => {
    render(<Card product={product} />);
    const name = screen.getByText(product.name);
    // const flavor = screen.getByText(product.flavor);


    expect(name).toBeInTheDocument();
    // // expect(flavor).toBeInTheDocument();
    // expect(name).toBeEqual("hamburguer")
    
});


});
