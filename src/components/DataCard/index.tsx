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
  BackIcon,
} from "./style";
import { FiCheckSquare } from "react-icons/fi";

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
  return (
    <Container>
      <Content>
        <DivTitle>
          <Title>{dataObj.title}</Title>
          <Line />
          <BackIcon>
            <FiCheckSquare size={30} />
          </BackIcon>
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
