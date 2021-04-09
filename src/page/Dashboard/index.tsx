import { Container, DivSection, DivMenu, DivAside, DivMain } from "./style";

const Dashboard = () => {
  return (
    <Container>
      <DivAside></DivAside>
      <DivMain>
        <DivSection>
          <DivMenu></DivMenu>
        </DivSection>
      </DivMain>
    </Container>
  );
};

export default Dashboard;
