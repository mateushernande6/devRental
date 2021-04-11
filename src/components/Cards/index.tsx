import { Container, ImgCard } from "./style";

const Card = () => {
  return (
    <Container>
      <>
        <image>
          <ImgCard src="https://picsum.photos/200/200" />
        </image>
        <section>
          <p>Teste para front-end </p>
        </section>
      </>
    </Container>
  );
};
export default Card;
