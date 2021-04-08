import {
  Container,
  ContainerSub,
  DivImage,
  Text,
  DivText,
  Image,
} from "./style";

const Details = () => {
  return (
    <>
      <Container>
        <ContainerSub>
          <DivImage>
            <Image src="./assets/sobreImage.svg" />
          </DivImage>
          <DivText>
            <Text>
              UMA EMPRESA SEMPRE ESTÁ ATRÁS DE PESSOAS QUALIFICADAS, MOSTRE PARA
              ELA QUE VOCÊ EXITE
            </Text>
          </DivText>
        </ContainerSub>
      </Container>
    </>
  );
};

export default Details;
