import {
  Card,
  Container,
  ContainerDiv,
  DivCards,
  DivItens,
  Img,
} from "./style";
import image1 from "./assets/asde1.svg";
import { BsPeopleCircle } from "react-icons/bs";
import { AiFillBank } from "react-icons/ai";
import { useContext } from "react";
import { AuthDashboardContext } from "../../Provider/AuthDashboard";
import { useHistory } from "react-router-dom";

const PreRegister = () => {
  const history = useHistory();

  const { setValueState } = useContext(AuthDashboardContext);

  const functionDev = (data: string) => {
    setValueState(data);
    history.push("/register");
  };

  const functionCompany = (data: string) => {
    setValueState(data);
    history.push("/register");
  };

  return (
    <Container>
      <ContainerDiv>
        <Img src={image1} />
        <DivItens>
          <h1>Selecione seu perfil para acessar a devRental</h1>
          <DivCards>
            <Card onClick={() => functionDev("dev")}>
              <BsPeopleCircle />
              <h2>Sou Dev</h2>
            </Card>
            <Card onClick={() => functionCompany("company")}>
              <AiFillBank />
              <h2>Sou Empresa</h2>
            </Card>
          </DivCards>
        </DivItens>
      </ContainerDiv>
    </Container>
  );
};

export default PreRegister;
