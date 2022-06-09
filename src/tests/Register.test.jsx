import { render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import user from "@testing-library/user-event";
import Register from "../pages/register";
import { createUser } from "../services/api"

jest.mock("../services/api")
jest.mock("react-router-dom")

describe("Register", () => {
  beforeEach(() => {
    createUser.mockClear();
  });
  it("Deverá cadastrar um usuário corretamente", async () => {
    createUser.mockResolvedValueOnce({})
    render(<Register />)
    const newRegister = {
      role:"kitchen",
      name: "Tania",
      email: "tania@mara.com",
      password: "123456"
    }
    const getRole = screen.getByLabelText("COZINHA")
    user.click(getRole)
    const name = screen.getByPlaceholderText("NOME")
    user.type(name, newRegister.name)
    const email = screen.getByPlaceholderText("E-MAIL")
    user.type(email, newRegister.email)
    const password = screen.getByPlaceholderText("SENHA")
    user.type(password, newRegister.password)

    const btnRegister = screen.getByText("CADASTRAR")
    user.click(btnRegister)

    await waitFor(() => {
      expect(createUser).toHaveBeenCalledWith(newRegister.name, newRegister.email, newRegister.password, newRegister.role)
    });
    expect(createUser).toHaveBeenCalledTimes(1)
  })
})


