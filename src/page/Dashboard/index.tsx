import { Container, DivSection, DivMenu, DivAside, DivMain } from "./style";
import Card from "../../components/Cards";

const Dashboard = () => {
  return (
    <Container>
      <DivAside></DivAside>
      <DivMain>
        <DivSection>
          <DivMenu></DivMenu>
          <Card />
        </DivSection>
      </DivMain>
    </Container>
  );
};

export default Dashboard;
