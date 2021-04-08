import HeaderHome from "../../components/Molecules/HeaderHome";
import { Container, DivBackground, ContainerLogo, ContainerOne } from "./style";

const Home = () => {
  return (
    <Container>
      <ContainerLogo />
      <DivBackground />
      <ContainerOne>
        <HeaderHome />
      </ContainerOne>
    </Container>
  );
};

export default Home;
