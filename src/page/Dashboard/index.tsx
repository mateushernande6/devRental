import {
  Container,
  DivSection,
  DivMenu,
  DivAside,
  DivMain,
  ContainerCard,
} from "./style";
import Card from "../../components/Cards";

const Dashboard = () => {
  return (
    <Container>
      <DivAside></DivAside>
      <DivMain>
        <DivSection>
          <DivMenu></DivMenu>
          <ContainerCard>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </ContainerCard>
        </DivSection>
      </DivMain>
    </Container>
  );
};

export default Dashboard;
