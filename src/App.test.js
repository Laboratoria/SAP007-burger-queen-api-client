import { fireEvent, render, screen } from "@testing-library/react";
import LoginUser from "../src/pages/login/login";
import Register from "../src/pages/register/Register";
import Button from "../src/components/button/Button";
import Input from "../src/components/input/Input";

/* eslint-disable */
// testes login e registro
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

// testes componente botão
test("It should submit button on login screen", () => {
  const handleSubmit = jest.fn();
  render(<Button onClick={handleSubmit}>Entrar</Button>);
  expect(handleSubmit).toHaveBeenCalledTimes(0);
  fireEvent.click(screen.getByText(/Entrar/i));
  expect(handleSubmit).toHaveBeenCalledTimes(1);
});

test("It should submit button on register screen", () => {
  const handleSubmit = jest.fn();
  render(<Button onClick={handleSubmit}>Cadastre-se</Button>);
  expect(handleSubmit).toHaveBeenCalledTimes(0);
  fireEvent.click(screen.getByText(/Cadastre-se/i));
  expect(handleSubmit).toHaveBeenCalledTimes(1);
});

// testes componente input
describe("Testing input component", () => {
  it("should render the input component", () => {
    render(<Input />);
  });

  it("should call the onChange function when value is changed", () => {
    const onChange = jest.fn();
    render(<Input onChange={onChange} />);
  });
});

/* veio no projeto
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); 
*/
