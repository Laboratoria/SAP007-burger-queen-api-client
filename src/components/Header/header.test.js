import { render, screen } from '@testing-library/react';
import Header from './index';

describe('Tests for Haeder component', () => {
  it('should show a image', () => {
    render(<Header/>);
    const image = screen.getAllByRole('img')
    expect(image).toHaveLength(1)
  })

});
