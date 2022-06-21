import { render, screen } from "@testing-library/react";

import Order from "./index";

describe("Tests for Order component", () => {
  const order = {
    status: "Pronto",
    id: 5829,
    table: 5,
    client_name: "Maria",
    createdAt: "2022-06-17T20:50:58.066Z",
    // processedAt: "13/06/2022 20:22",
    updatedAt: "2022-06-20T17:05:03.338Z",
    Products: [{
        name: "hamburguer",
        flavor: "carne",
        complement: "ovo",
        qtd: 1,
    }],
  }

  it("should render the order with table number", () => {
    render(<Order order={order} />);
    let name = screen.getByText("Cliente: Maria");
    let table = screen.getByText("Mesa: 5");
 
    expect(name).toBeInTheDocument();
    expect(table).toBeInTheDocument();
    expect(name).toHaveTextContent("Cliente: Maria");
  });
});