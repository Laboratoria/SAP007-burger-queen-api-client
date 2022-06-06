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
    const getRole = screen.ByTestId("occupation")
    user.selectOptions(getRole, newRegister.role)
    const name = screen.getByPlaceholderText(/Name/i)
    user.type(name, newRegister.name)
    const email = screen.getByPlaceholderText(/Email/i)
    user.type(email, newRegister.email)
    const password = screen.getByPlaceholderText(/Password/i)
    user.type(password, newRegister.password)

    const btnRegister = screen.getByRole("button")
    user.click(btnRegister)

    await waitFor(() => {
      expect(createUser).toHaveBeenCalledWith(newRegister)
    });
    expect(createUser).toHaveBeenCalledTimes(1)
  })
})
it("deverá disparar uma função de click", () => {
  const text = "Cadastrar"
  const onClick = jest.fn();
  render(<button onClick={onClick}>{text}</button>);

  expect(onClick).toHaveBeenCalledTimes(0);
  user.click(screen.getByText(text));
  expect(onClick).toHaveBeenCalledTimes(1);
});

