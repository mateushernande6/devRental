import { Container, ContainerSub, DivLogo, DivButtons, Image } from "./style";
import Button from "../../Atoms/Button";
import { useHistory } from "react-router-dom";

const HeaderHome = () => {
  const history = useHistory();

  return (
    <Container>
      <ContainerSub>
        <DivLogo>
          <Image src="./assets/logoHome.svg" alt="logo" />
        </DivLogo>
        <DivButtons>
          <Button
            click={() => history.push("/login")}
            color="#fff"
            background="#FC923F"
            height={3.5}
            width={13}
            text="Login"
          />
          <Button
            click={() => history.push("/register")}
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
