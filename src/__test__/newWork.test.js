import NewWork from "../components/DashboardParts/Company/newWork";

import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const mockFunctionSubmit = jest.fn();

jest.mock("react-hook-form", () => {
  return {
    useForm: () => ({
      handleSubmit: mockFunctionSubmit,
      formState: {
        errors: {
          title: "job title Error",
          objective: "job objective Error",
          description: "job description Error",
          reward: "job reward Error",
          workDeadline: "job deadline Error",
        },
      },
      register: jest.fn(),
    }),
  };
});

describe("adding a new work", () => {
  test("newWork", () => {
    render(<NewWork />);

    const inputTitle = screen.getByTestId("InputTitle");
    const inputObjective = screen.getByTestId("InputObjective");
    const inputDescription = screen.getByTestId("InputDescription");
    const inputReward = screen.getByTestId("InputReward");
    const inputDeadline = screen.getByTestId("InputDeadline");

    const newWorkForm = screen.getByTestId("newWorkForm");

    userEvent.type(inputTitle, "Job Title");
    userEvent.type(inputObjective, "Job Objective");
    userEvent.type(inputDescription, "Job Description");
    userEvent.type(inputReward, "Job Reward");
    userEvent.type(inputDeadline, "Job Deadline");

    fireEvent.submit(newWorkForm);

    expect(mockFunctionSubmit).toHaveBeenCalled();
  });
});
