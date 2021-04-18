import { Container } from "./style";

import HomeHeader from "../../components/HomeParts/HomeHeader";
import Partners from "../../components/HomeParts/Partners";
import GoalsMissions from "../../components/HomeParts/GoalsMissions";
import Attests from "../../components/HomeParts/Attests";
import Contact from "../../components/HomeParts/Contact";

const Home = () => {
  return (
    <Container>
      <HomeHeader />
      <Partners />
      <GoalsMissions />
      <Attests />
      <Contact />
    </Container>
  );
};

export default Home;
