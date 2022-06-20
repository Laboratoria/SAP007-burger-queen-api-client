import { render, screen, waitFor } from "@testing-library/react";

import user from "@testing-library/user-event";
import Login from "./index.js";
import { userLogin } from "../../services/auth";

jest.mock("../../services/auth")
jest.mock("react-router-dom")

describe("Login", () => {
  beforeEach(() => {
   userLogin.mockClear();
  });
  it("Should login user with email and password", async () => {
    userLogin.mockResolvedValueOnce({})
    render(<Login />)
 

   const email = "emplo@exemplo.com"
   const password = "123456"

    const getEmail = screen.getByPlaceholderText("email")
    user.type(getEmail,email)
    const getPassword = screen.getByPlaceholderText("senha")
    user.type(getPassword, password)

    const btnLogin = screen.getByRole("button")
    user.click(btnLogin)

    await waitFor(() => {
      expect(userLogin).toHaveBeenCalledWith(email, password)
    });
    expect(userLogin).toHaveBeenCalledTimes(1)
  })
})