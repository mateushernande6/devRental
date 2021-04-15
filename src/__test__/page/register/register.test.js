import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Register from "../../../page/Register";

const mockFuncSubmit = jest.fn();

jest.mock("react-hook-form", () => {
  return {
    useForm: () => ({
      handleSubmit: mockFuncSubmit,
      formState: {
        errors: {
          name: "Fabricio",
          email: "fab@mail.com",
          password: "Bb@654321",
        },
      },
      register: jest.fn(),
    }),
  };
});

describe("test page regster", () => {
  test("login", () => {
    render(<Register />);

    const inputName = screen.getByTestId("InputName");
    const inputEmail = screen.getByTestId("InputEmail");
    const inputPassword = screen.getByTestId("InputPassword");
    const formRegister = screen.getByTestId("formRegister");

    userEvent.type(inputName, "Valadares");
    userEvent.type(inputEmail, "valadares@mail.com");
    userEvent.type(inputPassword, "Aa@123456");

    fireEvent.submit(formRegister);

    expect(mockFuncSubmit).toHaveBeenCalled();
  });
});
