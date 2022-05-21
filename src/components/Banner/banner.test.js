import { render, screen } from '@testing-library/react';
import Banner from './index';

describe('Tests for Banner component', () => {
  it('should show a image', () => {
    render(<Banner/>);
    const image = screen.getAllByRole('img')
    expect(image).toHaveLength(1)
  })

});
