import HeaderHome from "../../components/Molecules/HeaderHome";
import Details from "../../components/Molecules/Details";
import { Container, DivBackground, ContainerLogo, ContainerOne } from "./style";

const Home = () => {
  return (
    <Container>
      <ContainerLogo />
      <DivBackground />
      <ContainerOne>
        <HeaderHome />
        <Details />
      </ContainerOne>
    </Container>
  );
};

export default Home;
