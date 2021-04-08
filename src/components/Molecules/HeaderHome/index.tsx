import { Container, ContainerSub, DivLogo, DivButtons, Image } from "./style";
import Button from "../../Atoms/Button";

const HeaderHome = () => {
  return (
    <Container>
      <ContainerSub>
        <DivLogo>
          <Image src="./assets/logoHome.svg" alt="logo" />
        </DivLogo>
        <DivButtons>
          <Button
            click={() => console.log("Button login")}
            color="#fff"
            background="#FC923F"
            height={3.5}
            width={13}
            text="Login"
          />
          <Button
            click={() => console.log("Button login")}
            height={3.5}
            width={13}
            color="#fff"
            background="#D75358"
            text="Register"
          />
        </DivButtons>
      </ContainerSub>
    </Container>
  );
};

export default HeaderHome;
