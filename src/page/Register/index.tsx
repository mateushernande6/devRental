import {
  Container,
  InnerContainer,
  SvgContainer,
  InfoContainer,
} from "./style";
import Input from "../../components/Atoms/Input";
import Button from "../../components/Atoms/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../services";
import { useHistory } from "react-router-dom";
import { AuthDashboardContext } from "../../Provider/AuthDashboard";
import { useContext } from "react";

const Register = () => {
  const history = useHistory();

  const { valueState } = useContext(AuthDashboardContext);

  interface IFormValue {
    email: string;
    password: string;
  }

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup
      .string()
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/
      )
      .required(),
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

    const dataEnd = { ...data, campany: `${valueState}` };

    api
      .post("users", dataEnd)
      .then((response) => {
        history.push("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <InnerContainer>
        <InfoContainer>
          <h2>Cadastrar</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              name="name"
              register={register}
              height={3.5}
              placeHolder={"Nome"}
              width={30}
            />
            <p>{errors.name?.message}</p>
            <Input
              name="email"
              register={register}
              height={3.5}
              placeHolder={"Email"}
              width={30}
            />
            <p>{errors.email?.message}</p>

            <Input
              name="password"
              register={register}
              height={3.5}
              placeHolder={"Senha"}
              width={30}
            />
            <p>{errors.password?.message}</p>

            <Button
              height={5}
              width={32}
              color={"#fff"}
              text={"Register"}
              background={"#fc923f"}
            />
          </form>

          <Button
            height={4}
            width={20}
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
