/*import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); 
*/

import LoginUser from "../src/pages/login/login";
import Register from "../src/pages/register/Register";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "../src/components/button/Button";

/* eslint-disable */
// test login e registro
describe("Login", () => {
  it("It should be a function", () => {
    expect(typeof LoginUser).toBe("function");
  });
});

describe("Register", () => {
  it("It should be a function", () => {
    expect(typeof Register).toBe("function");
  });
});

// test componente botão
test("It should submit button on login screen", () => {
  const handleSubmit = jest.fn();
  render(<Button onClick={handleSubmit}>Entrar</Button>);
  expect(handleSubmit).toHaveBeenCalledTimes(0);
  fireEvent.click(screen.getByText(/Entrar/i));
  expect(handleSubmit).toHaveBeenCalledTimes(1);
});

test("It should submit button on register screen", () => {
  const handleSubmit = jest.fn();
  render(<Button onClick={handleSubmit}>Cadastrar</Button>);
  expect(handleSubmit).toHaveBeenCalledTimes(0);
  fireEvent.click(screen.getByText(/Cadastrar/i));
  expect(handleSubmit).toHaveBeenCalledTimes(1);
});
