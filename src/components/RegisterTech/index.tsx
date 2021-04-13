import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../Atoms/Input";
import { Container, DivButtons, OrangeButton } from "./style";

import api from "../../services";
import Button from "../Atoms/Button";

interface IValue {
  name: string;
  userId: string;
}

export const RegisterTech = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
  });

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IValue) => {
    const id = JSON.parse(localStorage.getItem("userId") ?? "");
    let user = JSON.parse(localStorage.getItem("token") ?? "");
    const userId = "userId:" + id;
    const newData = { ...data, userId };
    api.post("techs", newData, {
      headers: { Authorization: `Bearer ${user}` },
    });
  };

  return (
    <Container>
      <h2>Qual tech você conhece?</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="name"
          register={register}
          height={1}
          placeHolder={"Tecnologia"}
          width={10}
        />
        <p>{errors.name?.message}</p>
        <OrangeButton
          height={2}
          width={7}
          color={"#fff"}
          text={"Ok"}
          background={"#fc923f"}
        />
      </form>
    </Container>
  );
};
