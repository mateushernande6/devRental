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
import { useHistory } from "react-router";

const PreRegister = () => {
  const history = useHistory();
  const handleHistory = () => {
    history.push("/register");
  };
  return (
    <Container>
      <ContainerDiv>
        <Img src={image1} />
        <DivItens>
          <h1>Selecione seu perfil para acessar a devRental</h1>
          <DivCards>
            <Card onClick={handleHistory}>
              <BsPeopleCircle />
              <h2>Sou Dev</h2>
            </Card>
            <Card onClick={handleHistory}>
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
