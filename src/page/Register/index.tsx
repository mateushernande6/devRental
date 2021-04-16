import {
  Container,
  InnerContainer,
  SvgContainer,
  InfoContainer,
  Title,
} from "./style";
import Input from "../../components/Atoms/Input";
import Button from "../../components/Atoms/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../services";
import { useHistory } from "react-router-dom";
import { AuthDashboardContext } from "../../Provider/AuthDashboard";
import { useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const Register = () => {
  const history = useHistory();

  const { valueState } = useContext(AuthDashboardContext);
  const [error, setError] = useState(false);
  const [valid, setValid] = useState(false);

  interface IFormValue {
    email: string;
    password: string;
  }

  const required = "Campo obrigatório";

  const schema = yup.object().shape({
    name: yup.string().required(required),
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

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IFormValue) => {
    reset();
    const userData = {
      category: `${valueState}`,
      src: "",
    };

    const dataEnd = { ...data, ...userData };

    api
      .post("users", dataEnd)
      .then((response) => {
        setValid(true);
        history.push("/login");
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  };

  useEffect(() => {
    if (error) {
      toast.error(
        <p style={{ fontSize: "1.5rem" }}>
          Não foi possivél fazer seu Registro
        </p>,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
      setError(false);
    }

    if (valid) {
      toast.success(
        <p style={{ fontSize: "1.5rem" }}>Registo efetuado com sucesso!</p>,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
      setValid(false);
    }
  }, [error, valid]);

  return (
    <Container>
      <InnerContainer>
        <InfoContainer>
          <Title>Cadastrar</Title>
          <form onSubmit={handleSubmit(onSubmit)} data-testid="formRegister">
            <Input
              data-testid="InputName"
              name="name"
              register={register}
              height={2.5}
              placeHolder={"Nome"}
              width={24}
            />
            <p>{errors.name?.message}</p>
            <Input
              data-testid="InputEmail"
              name="email"
              register={register}
              height={2.5}
              placeHolder={"Email"}
              width={24}
            />
            <p>{errors.email?.message}</p>

            <Input
              data-testid="InputPassword"
              name="password"
              register={register}
              height={2.5}
              placeHolder={"Senha"}
              width={24}
            />
            <p>{errors.password?.message}</p>

            <Button
              height={4.7}
              width={26}
              color={"#fff"}
              text={"Register"}
              background={"#fc923f"}
            />
          </form>

          <Button
            height={4}
            width={26}
            color={"#fff"}
            text={"Login"}
            click={() => history.push("/login")}
            background={"#14142b"}
          />
        </InfoContainer>
        <SvgContainer>
          <img src="./assets/registerImage.svg" alt={""} />
        </SvgContainer>
      </InnerContainer>
    </Container>
  );
};

export default Register;
