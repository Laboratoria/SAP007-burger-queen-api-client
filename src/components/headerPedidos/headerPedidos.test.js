import { render, screen, fireEvent } from '@testing-library/react';
import HeaderPedidos from './index';

describe('Tests for HeaderPedidos component', () => {
  
    it('should render  two li inside HeaderPedidos', () => {
    //   const onClick = jest.fn()
      const links = [
        {
          name: "Café da manhã",
        //   onClick: () => onClick(),
        },
        {
          name: "Dia Todo",
        //   onClick: () => onClick(),
        },
      ];

      render(<HeaderPedidos links={links} />)
      const link = screen.getByRole('listitem')
      expect(link).toHaveLength(2)

    //   expect(onClick).toHaveBeenCalledTimes(0)
    //   fireEvent.click(links)
    //   expect(onClick).toHaveBeenCalledTimes(2)
    })
  });