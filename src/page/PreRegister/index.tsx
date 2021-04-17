import {
  Card,
  Container,
  ContainerDiv,
  DivCards,
  DivItens,
  DivImage,
  Img,
  DivText,
  DivCardIcon,
} from "./style";
import image1 from "./assets/asde1.svg";
import { BsPeopleCircle } from "react-icons/bs";
import { FiUser, FiHome } from "react-icons/fi";
import { AiFillBank } from "react-icons/ai";
import { useContext } from "react";
import { AuthDashboardContext } from "../../Provider/AuthDashboard";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

const PreRegister = () => {
  const history = useHistory();

  const { setValueState } = useContext(AuthDashboardContext);

  const functionDev = (data: string) => {
    setValueState(data);
    console.log(data);

    history.push("/register");
  };

  const functionCompany = (data: string) => {
    setValueState(data);
    console.log(data);
    history.push("/register");
  };

  return (
    <Container>
      <motion.div
        initial={{ translateY: "-100%" }}
        animate={{ translateY: "0%" }}
        transition={{ duration: 0.7 }}
      >
        <ContainerDiv>
          <DivImage>
            <Img src={image1} />
          </DivImage>
          <DivItens>
            <DivText>
              <h1>Selecione seu perfil para acessar a devRental</h1>
            </DivText>
            <DivCards>
              <Card onClick={() => functionDev("dev")}>
                <DivCardIcon>
                  <FiUser size={50} />
                </DivCardIcon>
                {/* <BsPeopleCircle /> */}
                <h2>Sou Dev</h2>
              </Card>
              <Card onClick={() => functionCompany("company")}>
                <DivCardIcon>
                  <FiHome size={50} />
                </DivCardIcon>

                {/* <AiFillBank /> */}
                <h2>Sou Empresa</h2>
              </Card>
            </DivCards>
          </DivItens>
        </ContainerDiv>
      </motion.div>
    </Container>
  );
};

export default PreRegister;
