import { render, screen } from "@testing-library/react";
import { getAllProducts } from "../../services/products";
import Order from "./index";

describe("Tests for Order component", () => {
  let order = [{
    status: "Pronto",
    id: 5829,
    table: 5,
    client_name: "Maria",
    createdAt: "2022-06-17T20:50:58.066Z",
    // processedAt: "20/06/2022 13:15",
    updatedAt: "2022-06-20T17:05:03.338Z",
    Products: [{
        name: "hamburguer",
        flavor: "carne",
        complement: "ovo",
        qtd: 1,
    }],
  }]

  it("should render the order with table number", () => {
    render(<Order order={order} />);
    let table = screen.getByNumber(order[0].table);

    expect(table).toBeInTheDocument();
    expect(table).toBeEqual(5);
  });
});