import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import register from "../pages/register";
import {createUser} from "../services/api"

jest.mock("../services/api")
jest.mock("react-router-dom")

describe("Register", () => {
  it("Deverá cadastrar um usuário corretamente",async() =>{
    createUser.mockResolvedValueOnce({})
    render(<register/>)
    const newRegister = {
      // role:"hall",
      name: "Tania",
      email:"tania@mara.com",
      password: "123456",
    }
    // const role = screen.getByLabelText("hall")
    // user.id(role,newRegister.role)
    const name = screen.getByPlaceholderText(/Nome/i)
    user.type(name, newRegister.name)
    const email = screen.getByPlaceholderText(/Email/i)
    user.type(email, newRegister.email)
    const password = screen.getByPlaceholderText(/Password/i)
    user.type(password, newRegister.password)

    const btnRegister = screen.getByRole("button")
    user.click(btnRegister)

  await waitFor(() =>{
      expect(createUser).toHaveBeenCalledWith(newRegister)
    });
    expect(createUser).toHaveBeenCalledTimes(1)
  })
  })
  it("Deverá ser uma função", () => {
    expect(typeof register).toBe("function");
  });

  it("deverá disparar uma função de click", () => {
    const text = "Cadastrar"
    const onClick = jest.fn();
    render(<button onClick={onClick}>{text}</button>);

    expect(onClick).toHaveBeenCalledTimes(0);
    user.click(screen.getByText(text));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

