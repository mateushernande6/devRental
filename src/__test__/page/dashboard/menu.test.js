import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LocalStorageMock } from "@react-mock/localstorage";
import { ComponentDev } from "../../../components/ComponentDev";
import axios from "axios";

// jest.mock("axios");
// const mockedAxios = axios;

describe("When everything is ok", () => {
  test("Should value appear on the tech list when the user click ok after type a value", async () => {
    // const getName = {
    //   name: "teste",
    //   email: "teste@teste.com",
    // };
    // const getTech = {
    //   name: "Java",
    // };

    // mockedAxios.get.mockResolvedValueOnce({ data: { getName } });
    // mockedAxios.get.mockResolvedValueOnce({ data: { getTech } });

    render(
      <LocalStorageMock items={{ userId: "2", token: "teste" }}>
        <ComponentDev />
      </LocalStorageMock>
    );

    const addTech = screen.getByTestId("divPlus");
    const showTech = screen.getByTestId("tech");
    const inputTech = screen.getByTestId("inputRegister");
    const registerTechButton = screen.getByTestId("buttonRegister");

    userEvent.click(addTech);
    userEvent.type(inputTech, "Java");
    userEvent.click(registerTechButton);

    expect(showTech).toBeInTheDocument;
  });
});
