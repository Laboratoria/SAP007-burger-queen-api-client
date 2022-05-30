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

/* eslint-disable */
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