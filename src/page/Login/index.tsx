import { Container, Main, DivImage, DivContent } from "./style";
import Input from "../../components/Atoms/Input";
import Button from "../../components/Atoms/Button";
import { Link } from "react-router-dom";
import api from "../../services";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";

interface IFormInputs {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const Login = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IFormInputs) => {
    api
      .post("login", data)
      .then((response) => {
        localStorage.clear();
        localStorage.setItem(
          "token",
          JSON.stringify(response.data.accessToken)
        );

        history.push("/devdashboard");
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <Container>
      <Main>
        <DivImage>
          <img src="./assets/loginImage.svg" />
        </DivImage>
        <DivContent>
          <h2>Faça Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              name="email"
              width={30}
              height={3.2}
              placeHolder="Email"
              register={register}
            />
            <p>{errors.email?.message}</p>
            <Input
              name="password"
              width={30}
              height={3.2}
              placeHolder="Password"
              register={register}
            />
            <p>{errors.password?.message}</p>
            <Button
              width={32.5}
              height={5.5}
              text="Entrar"
              color="white"
              background="#FC923F"
            />
          </form>
          <Link className="linkReg" to="/register">
            Register
          </Link>
        </DivContent>
      </Main>
    </Container>
  );
};

export default Login;
