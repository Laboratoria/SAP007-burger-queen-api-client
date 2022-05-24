import { render, screen } from '@testing-library/react';
import Footer from './index';

describe('Tests for Footer component', () => {
  it('should show 2 links', () => {
    render(<Footer/>);
    const links = screen.getAllByRole('link');
    expect(links.length).toEqual(2);
  })

});