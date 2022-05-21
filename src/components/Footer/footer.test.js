import { render, screen } from '@testing-library/react';
import Footer from './index';

describe('Tests for Footer component', () => {
  it('should show 2 links', () => {
    render(<Footer/>);
    const link = screen.getByRole('link');
    expect(link).toHaveLength(2);
  })

});