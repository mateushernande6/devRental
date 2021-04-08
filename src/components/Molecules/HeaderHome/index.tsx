import { Container, DivLogo, DivButtons } from "./style";
import Button from "../../Atoms/Button";

const HeaderHome = () => {
  return (
    <Container>
      <DivLogo></DivLogo>
      <DivButtons>
        <Button
          click={() => console.log("Button login")}
          color="#fff"
          background="#FC923F"
          height={80}
          width={60}
          text="Login"
        />
        <Button
          click={() => console.log("Button login")}
          height={80}
          width={60}
          color="#fff"
          background="#D75358"
          text="Register"
        />
      </DivButtons>
    </Container>
  );
};

export default HeaderHome;
