import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../Atoms/Input";
import { Container, DivButtons, OrangeButton, P } from "./style";

import api from "../../services";
import Button from "../Atoms/Button";
import { SetStateAction } from "react";

interface IValue {
  name: string;
  userId: string;
}

interface IProps {
  getTechs: () => void;
}

export const RegisterTech = ({ getTechs }: IProps) => {
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
    const userId = id;
    const newData = { ...data, userId };
    console.log(newData);

    api
      .post("techs", newData, {
        headers: { Authorization: `Bearer ${user}` },
      })
      .then((response) => {
        console.log(response);
      });
    reset();
    getTechs();
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
        <P>{errors.name?.message}</P>
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
