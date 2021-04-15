import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RegisterTech } from "../../../components/RegisterTech";

const mockFuncSubmit = jest.fn();

jest.mock("react-hook-form", () => {
  return {
    useForm: () => ({
      handleSubmit: mockFuncSubmit,
      formState: {
        errors: {
          name: "Java",
        },
      },
      register: jest.fn(),
    }),
  };
});

describe("When everything is ok", () => {
  test("a new technology should be registered in the menu", async () => {
    render(<RegisterTech />);
    const inputTech = screen.getByTestId("inputRegister");
    const formRegisterTech = screen.getByTestId("formTech");

    userEvent.type(inputTech, "Java");
    fireEvent.submit(formRegisterTech);

    expect(mockFuncSubmit).toHaveBeenCalled();
  });
});
