import { Container, DivTitle, Title, SubTitle, Text } from "./style";

interface IAceptedWork {
  title: string;
  objective: string;
  description: string;
  tecnology: string[];
  reward: string;
  workDeadline: string;
}
interface IItem {
  item: IAceptedWork;
}

const AceptedWork = ({ item }: IItem) => {
  const { title, objective, description, reward } = item;

  console.log("dataItem", item);

  return (
    <Container>
      <DivTitle>
        <Title>{title}</Title>
      </DivTitle>
      <SubTitle>Objetivo:</SubTitle>
      <Text>{objective}</Text>
      <SubTitle>Descrição:</SubTitle>
      <Text>{description}</Text>
      <SubTitle>Recompensa:</SubTitle>
      <Text>{reward}</Text>
    </Container>
  );
};

export default AceptedWork;
