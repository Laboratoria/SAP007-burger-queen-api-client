

import { render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import user from "@testing-library/user-event";
import Register from "./index";
import { createUser } from "../../services/auth";

jest.mock("../../services/auth")
jest.mock("react-router-dom")

describe("Register", () => {
  beforeEach(() => {
    createUser.mockClear();
  });
  it("Should register user with name, email, role and password", async () => {
    createUser.mockResolvedValueOnce({})
    render(<Register />)
    const newRegister = {
      role:"kitchen",
      name: "Ana",
      email: "ana@maria.com",
      password: "123456"
    }
    const getRole = screen.getByLabelText("Cozinha")
    user.click(getRole)
    const name = screen.getByPlaceholderText("nome")
    user.type(name, newRegister.name)
    const email = screen.getByPlaceholderText("email@email.com")
    user.type(email, newRegister.email)
    const password = screen.getByPlaceholderText("senha")
    user.type(password, newRegister.password)

    const btnRegister = screen.getByText("Cadastrar")
    user.click(btnRegister)

    await waitFor(() => {
      expect(createUser).toHaveBeenCalledWith(newRegister.name, newRegister.email, newRegister.password, newRegister.role)
    });
    expect(createUser).toHaveBeenCalledTimes(1)
  })
})