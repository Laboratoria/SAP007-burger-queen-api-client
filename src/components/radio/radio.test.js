import { render, screen, fireEvent } from "@testing-library/react";
import Radio from "./index";

const firstInputValue = "value-1";
const firstLabel = "kitchen";
const secondInputValue = "value-2";
const secondLabel = "waitress";
describe("Tests for ButtonRadio component", () => {
  it("should render two radio buttons with the informations", () => {
    render(
      <>
        <Radio value={firstInputValue} label={firstLabel} />
        <Radio value={secondInputValue} label={secondLabel} />
      </>
    );

    const input1 = screen.getByLabelText(firstLabel);
    expect(input1).toBeInTheDocument();
    const input2 = screen.getByLabelText(secondLabel);
    expect(input2).toBeInTheDocument();
  });

  it("should change the value when a input is selected", () => {
    render(
      <>
        <Radio value={firstInputValue} label={firstLabel} />
        <Radio value={secondInputValue} label={secondLabel} />
      </>
    );
    const input1 = screen.getByLabelText(firstLabel);
    const input2 = screen.getByLabelText(secondLabel);

    fireEvent.change(input1, {
      target: {
        value: secondInputValue,
      },
    });
    expect(input1.value).toBe(secondInputValue);

    fireEvent.change(input2, {
      target: {
        value: firstInputValue,
      },
    });

    expect(input2.value).toBe(firstInputValue);
  });

  it('should change the checked input and call a function when any button is clicked', () => {
    const onChange = jest.fn()
    render(
        <>
          <Radio value={firstInputValue} label={firstLabel} />
          <Radio value={secondInputValue} label={secondLabel} />
        </>
      );
    const input1 = screen.getByLabelText(firstLabel)
    const input2 = screen.getByLabelText(secondLabel)
   
    fireEvent.click(input1)

    expect(input1.checked).toEqual(true)
    expect(input2.checked).toEqual(false)

    expect(onChange).toHaveBeenCalledTimes(1)

    fireEvent.click(input2)

    expect(input1.checked).toEqual(false)
    expect(input2.checked).toEqual(true)

    expect(onChange).toHaveBeenCalledTimes(2)
    
  })
});
