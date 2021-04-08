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

const Register = () => {
  interface IFormValue {
    email: string;
    password: string;
  }

  const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<IFormValue>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IFormValue) => {
    reset();

    console.log(data);
  };

  return (
    <Container>
      <InnerContainer>
        <InfoContainer>
          <h2>Cadastrar</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              {...register("email")}
              height={3.5}
              placeHolder={"Email"}
              width={30}
            />
            <p>{errors.email?.message}</p>

            <Input
              {...register("password")}
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
              click={() => console.log("oi")}
            />
          </form>

          <Button
            height={4}
            width={20}
            color={"#fff"}
            text={"Login"}
            background={"#14142b"}
            click={() => console.log("oi")}
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
