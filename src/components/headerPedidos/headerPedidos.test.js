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
  ];
  it("should render  two li inside HeaderPedidos", () => {
    render(<HeaderPedidos links={links} />);
    const link = screen.getByRole("listitem");
    expect(link).toHaveLength(2);
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
