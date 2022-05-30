import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import login from "../pages/login";


describe("Login", () => {

  it("Deverá ser uma função", () => {
    expect(typeof login).toBe("function");
  });

    it("deverá disparar uma função de click", () => {
    const text = "Entar"
    const onClick = jest.fn();
    render(<button onClick={onClick}>{text}</button>);

    expect(onClick).toHaveBeenCalledTimes(0);
    user.click(screen.getByText(text));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
