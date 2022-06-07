import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "./index";

describe("Tests for navbarAllDay component", () => {
  const onClick = jest.fn();
  const links = [
    {
      name: "Hamburgueres",
      onClick: () => onClick(),
    },
    {
      name: "Bebidas",
      onClick: () => onClick(),
    },
    {
      name: "Acompanhamentos",
      onClick: () => onClick(),
    },
  ];
  it("should render three li inside navbar with menu name", () => {
    render(<Navbar links={links} />);
    const nameOne = screen.getByText(links[0].name);
    const nameTwo = screen.getByText(links[1].name);
    const nameThree = screen.getByText(links[2].name);

    expect(links).toHaveLength(3);
    expect(nameOne).toHaveTextContent("Hamburgueres");
    expect(nameTwo).toHaveTextContent("Bebidas");
    expect(nameThree).toHaveTextContent("Acompanhamentos");
  });

  it("Should call the function by click", () => {
    render(<Navbar links={links} />);
    const nameOne = screen.getByText(links[0].name);
    const nameTwo = screen.getByText(links[1].name);
    const nameThree = screen.getByText(links[2].name);

    expect(onClick).toHaveBeenCalledTimes(0);
    fireEvent.click(nameOne);
    expect(onClick).toHaveBeenCalledTimes(1);
    fireEvent.click(nameTwo);
    expect(onClick).toHaveBeenCalledTimes(2);
    fireEvent.click(nameThree);
    expect(onClick).toHaveBeenCalledTimes(3);
  });
});
