import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../../../page/Login";

describe("when the user is logging in", () => {
  test("Should are a user invalid", () => {
    render(<Login />);
  });
});
