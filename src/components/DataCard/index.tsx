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

const DataCard = () => {
  return (
    <Container>
      <Content>
        <DivTitle>
          <Title>DevRental</Title>
          <Line />
          <BackIcon>
            <FiCheckSquare size={30} />
          </BackIcon>
        </DivTitle>
        <SubTitle>Objetivo:</SubTitle>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy
        </Text>
        <SubTitle>Descrição:</SubTitle>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
        <Text>
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </Text>
        <SubTitle>Tecnologias:</SubTitle>
        <UlStyled>
          <LiStyled>React</LiStyled>
          <LiStyled>JsonServe</LiStyled>
          <LiStyled>Styles-components</LiStyled>
          <LiStyled>Context-api</LiStyled>
          <LiStyled>Yup</LiStyled>
        </UlStyled>
        <SubTitle>Recompensa:</SubTitle>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy
        </Text>
      </Content>

      <Image />
    </Container>
  );
};

export default DataCard;
