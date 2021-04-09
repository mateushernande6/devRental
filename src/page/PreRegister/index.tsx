import { Container } from "./style";
import { useContext } from "react";
import { AuthDashboardContext } from "../../Provider/AuthDashboard";
import { useHistory } from "react-router-dom";

const PreRegister = () => {
  const history = useHistory();

  const { setValueState } = useContext(AuthDashboardContext);

  const FunctionDev = (data: string) => {
    setValueState(data);
    history.push("/register");
  };

  const FunctionCampany = (data: string) => {
    setValueState(data);
    history.push("/register");
  };

  return (
    <Container>
      <button onClick={() => FunctionDev("dev")}>DEV</button>
      <button onClick={() => FunctionCampany("company")}>COMPANY</button>
    </Container>
  );
};

export default PreRegister;
