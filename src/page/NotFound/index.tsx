import { Container, Div } from "./style";
import { useHistory } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";

const NotFound = () => {
  const history = useHistory();

  return (
    <Container>
      <header>
        <h1>Ooops... Esta pagina não existe</h1>
      </header>
      <img src="./assets/404.svg" alt="Not Found" />
    </Container>
  );
};

export default NotFound;
