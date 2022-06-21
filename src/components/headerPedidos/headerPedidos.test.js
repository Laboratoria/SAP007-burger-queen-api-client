import { render, screen, fireEvent } from "@testing-library/react";
import HeaderPedidos from "./index";

describe("Tests for HeaderPedidos component", () => {
  const onClick = jest.fn();
  const links = [
    {
      name: "Café da manhã",
      onClick: () => onClick(),
    },
    {
      name: "Dia Todo",
      onClick: () => onClick(),
    },
    {
      name: "Pedidos",
      onClick: () => onClick(),
    },
  ];
  it("should render  two li inside HeaderPedidos", () => {
    render(<HeaderPedidos links={links} />);
    const breakfast = screen.getByRole("Café da manhã");
    const allDay = screen.getByRole("Dia Todo");
    const orders = screen.getByRole("Pedidos");

    expect(breakfast).toBeInTheDocument();
    expect(allDay).toBeInTheDocument();
    expect(orders).toBeInTheDocument();
    // expect(links).toHaveLength(3);
  });

  // it("Should call the function by click", () => {
  //   render(<HeaderPedidos links={links} />);

  //   const nameOne = screen.getByText(links[0].name);
  //   const nameTwo = screen.getByText(links[1].name);

  //   expect(onClick).toHaveBeenCalledTimes(0);
  //   fireEvent.click(nameOne);
  //   expect(onClick).toHaveBeenCalledTimes(1);
  //   fireEvent.click(nameTwo);
  //   expect(onClick).toHaveBeenCalledTimes(2);
  // });
});
