import { render, screen, waitFor } from "@testing-library/react";

import user from "@testing-library/user-event";
import Login from "../pages/login";
import { logedIn } from "../services/api"

jest.mock("../services/api")
jest.mock("react-router-dom")

describe("Login", () => {
  beforeEach(() => {
   logedIn.mockClear();
  });
  it("Deverá logar usuário corretamente", async () => {
    logedIn.mockResolvedValueOnce({})
    render(<Login />)
 

   const email = "emplo@exemplo.com"
   const password = "123456"

    const getEmail = screen.getByPlaceholderText("E-MAIL")
    user.type(getEmail,email)
    const getPassword = screen.getByPlaceholderText("SENHA")
    user.type(getPassword, password)

    const btnLogin = screen.getByRole("button")
    user.click(btnLogin)

    await waitFor(() => {
      expect(logedIn).toHaveBeenCalledWith(email, password)
    });
    expect(logedIn).toHaveBeenCalledTimes(1)
  })
})


