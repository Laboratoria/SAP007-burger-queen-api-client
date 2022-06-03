import { render, screen,waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import login from "../pages/login";
import {logedIn} from "../services/api"

jest.mock ("../services/api")
jest.mock("react-router-dom")

describe("Login", () => {
  it("Deverá logar usuário corretamente",async()=>{
    logedIn.mockResolvedValueOnce({})
    render(<login/>)
    const newLogin = {
      email:"tania@mara.com",
      password: "123456",
    }
    const email = screen.getByPlaceholderText(/Email/i)
    user.type(email, newLogin.email)
    const password = screen.getByPlaceholderText(/Password/i)
    user.type(password, newLogin.password)

    const btnLogin = screen.getByRole("button")
    user.click(btnLogin)

  await waitFor(() =>{
      expect(logedIn).toHaveBeenCalledWith(newLogin)
    });
    expect(logedIn).toHaveBeenCalledTimes(1)
  })
  })
  it("Deverá ser uma função", () => {
    expect(typeof login).toBe("function");
  });

  it("deverá disparar uma função de click", () => {
    const text = "Entar";
    const onClick = jest.fn();
    render(<button onClick={onClick}>{text}</button>);

    expect(onClick).toHaveBeenCalledTimes(0);
    user.click(screen.getByText(text));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

