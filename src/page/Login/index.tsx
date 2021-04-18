import {
  Container,
  Main,
  DivImage,
  DivContent,
  FiCrosshairStyled,
} from "./style";
import Input from "../../components/Reusables/Input";
import Button from "../../components/Reusables/Button";
import { DataMapContext } from "../../Provider/DataMap";
import api from "../../services";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";
import { useState, useEffect, useContext } from "react";
import { AuthDashboardContext } from "../../Provider/AuthDashboard";
import { motion } from "framer-motion";

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
  const { setIsAuth } = useContext(AuthDashboardContext);
  const { setCurrentWindow } = useContext(DataMapContext);
  const [error, setError] = useState(false);
  const [valid, setValid] = useState(false);

  const [viewIcon, setViewIcon] = useState(false);

  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IFormInputs) => {
    setViewIcon(true);
    reset();
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
        setCurrentWindow("Campany");
        setValid(true);
        setIsAuth(true);
        history.push("/dashboard");
      })
      .catch((err) => {
        setError(true);
        console.log(err.response);
      });
  };

  useEffect(() => {
    setViewIcon(false);
    if (error) {
      toast.error(
        <p style={{ fontSize: "1.5rem" }}>Não foi possivél fazer login</p>,
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
      toast.dark(<p style={{ fontSize: "1.5rem" }}>Bem Vindo!</p>, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setValid(false);
    }
  }, [error, valid]);

  console.log(error);
  return (
    <Container>
      <motion.div
        initial={{ translateX: "-100%" }}
        animate={{ translateX: "0%" }}
        transition={{ duration: 0.7 }}
      >
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
                data-testId="emailInput"
              />
              <p data-testId="error1">{errors.email?.message}</p>
              <Input
                name="password"
                width={30}
                height={3.2}
                placeHolder="Password"
                register={register}
                type="password"
                data-testId="passwordlInput"
              />
              <p data-testId="error2">{errors.password?.message}</p>
              <Button
                data-testId="submitButton"
                width={32.5}
                height={5.5}
                text={!viewIcon ? "Entrar" : <FiCrosshairStyled size={26} />}
                color="white"
                background="#FC923F"
              />
            </form>
            <a
              data-testId="btnRegister"
              className="linkReg"
              onClick={() => history.push("preregister")}
            >
              Register
            </a>
          </DivContent>
        </Main>
      </motion.div>
    </Container>
  );
};

export default Login;
