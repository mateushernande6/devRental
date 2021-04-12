import { Container, Main, DivImage, DivContent } from "./style";
import Input from "../../components/Atoms/Input";
import Button from "../../components/Atoms/Button";
import { Link } from "react-router-dom";
import api from "../../services";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";

interface IFormInputs {
  email: string;
  password: string;
}

const required = "Campo obrigatório";

const schema = yup.object().shape({
  email: yup.string().email("Email Invalido").required(required),
  password: yup
    .string()
    .min(8, "Mínimo de 8 dígitos")
    .matches(
      /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial!"
    )
    .required(required),
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
        let { sub } = jwt_decode<string>(response.data.accessToken);
        localStorage.setItem("userId", JSON.stringify(sub));
        console.log(response);
        history.push("/dashboard");
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <Container>
      <Main>
        <DivImage>
          <img src="./assets/loginImage.svg" alt="img" />
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
          <Link className="linkReg" to="/preregister">
            Register
          </Link>
        </DivContent>
      </Main>
    </Container>
  );
};

export default Login;
