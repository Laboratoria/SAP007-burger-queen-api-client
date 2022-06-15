import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import TemplateKitchen from "../components/TemplateKitchen";

describe("<TemplateKitchen />", () => {
  it("Renderizar uma UL com as informações da comanda", () => {
    const infosKitchen = {
      id: 5014,
      client: "Tania Mara",
      mesa: "3",
      create: "13/06/2022 19:12",
      update:"13/06/2022 19:22",
      preparated:"13/06/2022 20:22",
      ready: "1 hora(s)",
      products:[ {
        name:"café americano",
        flavor:"null",
        complement:"null",
        price: 5,
        qtd: 1,
      }]
    }
    render(<TemplateKitchen props={infosKitchen}/>);
    
    const id = screen.getByText("N°:5014")
    expect(id).toBeInTheDocument()
    const client = screen.getByText("Cliente: Tania Mara")
    expect(client).toBeInTheDocument()
    const table = screen.getByText("Mesa: 3")
    expect(table).toBeInTheDocument()
    const create = screen.getByText("Criado: 13/06/2022 19:12")
    expect(create).toBeInTheDocument()
    const update = screen.getByText("Atualização: 13/06/2022 19:22")
    expect(update).toBeInTheDocument()
    const preparated = screen.getByText("Preparo: 13/06/2022 20:22")
    expect(preparated).toBeInTheDocument()
    const ready = screen.getByText("Pronto: 1 hora(s)")
    expect(ready).toBeInTheDocument()
    const name = screen.getByText(infosKitchen.products.name)
    expect(name).toBeInTheDocument()
    const flavor = screen.getByText("null")
    expect(flavor).toBeInTheDocument()
    const complement = screen.getByText("null")
    expect(complement).toBeInTheDocument()
    const qtd = screen.getByText("1")
    expect(qtd).toBeInTheDocument()
  });
});