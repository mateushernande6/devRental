import {
  Image,
  Container,
  Content,
  Title,
  SubTitle,
  Text,
  UlStyled,
  LiStyled,
  DivTitle,
  Line,
  BackIconCam,
  TextButton,
  BackIcon,
} from "./style";
import { FiCheckSquare } from "react-icons/fi";
import { useContext } from "react";
import { AuthDashboardContext } from "../../Provider/AuthDashboard";

interface IitensData {
  title: string;
  objective: string;
  description: string;
  tecnology: string[];
  reward: string;
}
interface ImodalData {
  dataObj: IitensData;
}

const DataCard = ({ dataObj }: ImodalData) => {
  const { valueState } = useContext(AuthDashboardContext);

  return (
    <Container>
      <Content>
        <DivTitle>
          <Title>{dataObj.title}</Title>
          {/* <Line /> */}
          {valueState === "dev" ? (
            <BackIcon>
              <FiCheckSquare size={28} />
              <TextButton>Aceitar Desafio</TextButton>
            </BackIcon>
          ) : (
            <BackIconCam>
              <FiCheckSquare size={28} />
              <TextButton>Excluir Desafio</TextButton>
            </BackIconCam>
          )}
        </DivTitle>
        <SubTitle>Objetivo:</SubTitle>
        <Text>{dataObj.objective}</Text>
        <SubTitle>Descrição:</SubTitle>
        <Text>{dataObj.description}</Text>
        <SubTitle>Tecnologias:</SubTitle>
        <UlStyled>
          {dataObj.tecnology.map((ele) => (
            <LiStyled>{ele}</LiStyled>
          ))}
        </UlStyled>
        <SubTitle>Recompensa:</SubTitle>
        <Text>{dataObj.reward}</Text>
      </Content>

      <Image />
    </Container>
  );
};

export default DataCard;
