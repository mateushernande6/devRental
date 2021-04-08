import { Container, Main, DivImage, DivContent } from "./style";
import Input from "../../components/Atoms/Input";
import Button from "../../components/Atoms/Button";

const Login = () => {
  return (
    <Container>
      <Main>
        <DivImage>
          <img src="./assets/loginImage.svg" />
        </DivImage>
        <DivContent>
          <h2>Faça Login</h2>
          <Input width={30} height={3.2} placeHolder="Email" />
          <Input width={30} height={3.2} placeHolder="Password" />
          <Button
            width={32.5}
            height={5}
            text="Entrar"
            color="white"
            background="orange"
            click={() => console.log("click aqui")}
          />
        </DivContent>
      </Main>
    </Container>
  );
};

export default Login;
