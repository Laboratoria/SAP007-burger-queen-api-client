import { render, screen, waitFor } from "@testing-library/react";

import user from "@testing-library/user-event";
import login from "../pages/login";
import { logedIn } from "../services/api"

jest.mock("../services/api")
jest.mock("react-router-dom")

describe("Login", () => {
  beforeEach(() => {
   logedIn.mockClear();
  });
  it("Deverá logar usuário corretamente", async () => {
    logedIn.mockResolvedValueOnce({})
    render(<login />)
    // const newLogin = {
    //   email: "tania@mara.com",
    //   password: "123456",
    // }

   const email = "emplo@exemplo.com"
   const password = "123456"

    const getEmail = screen.getByPlaceholderText(/Email/i)
    user.type(getEmail,email)
    const getPassword = screen.getByPlaceholderText(/Senha/i)
    user.type(getPassword, password)

    const btnLogin = screen.getByRole("button")
    user.click(btnLogin)

    await waitFor(() => {
      expect(logedIn).toHaveBeenCalledWith(email, password)
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

