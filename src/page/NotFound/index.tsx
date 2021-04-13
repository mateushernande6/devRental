import { Container, Image } from "./style";

const NotFound = () => {
  return (
    <Container>
      Ooops... Essa pagina não existe.
      <Image src="./assets/404.svg" alt="404" />
    </Container>
  );
};

export default NotFound;
