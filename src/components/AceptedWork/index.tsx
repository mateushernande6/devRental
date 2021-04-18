import { Container, DivTitle, Title, SubTitle, Text } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../Reusables/Input";
import Button from "../Reusables/Button";
import api from "../../services";
import { DataMapContext } from "../../Provider/DataMap";
import { useContext } from "react";

interface IAceptedWork {
  title: string;
  objective: string;
  description: string;
  tecnology: string[];
  reward: string;
  workDeadline: string;
}
interface IItem {
  item: IAceptedWork;
}

interface IFormInputs {
  text: any;
}

interface Iuser {
  token: string;
}

const AceptedWork = ({ item }: IItem) => {
  const { title, objective, description, reward } = item;

  const { setCurrentJob } = useContext(DataMapContext);

  const required = "Campo obrigatório";

  const schema = yup.object().shape({
    text: yup.string().required(required),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const idUser = JSON.parse(localStorage.getItem("userId") ?? "");
  let user: Iuser = JSON.parse(localStorage.getItem("token") ?? "");

  const deleteDataPortfolio = () => {
    const dataApi = { acceptedId: "" };

    api
      .patch(`users/${idUser}/`, dataApi, {
        headers: { Authorization: `Bearer ${user}` },
      })
      .then((response) => {
        setCurrentJob({});
        localStorage.setItem("acceptedId", JSON.stringify(response.data));
      })
      .catch((err) => console.log(err));
  };

  const onSubmit = (data: IFormInputs) => {
    reset();

    const dataApi = { ...data, item, userId: idUser };

    console.log(dataApi);

    api
      .post(`portfolio`, dataApi, {
        headers: { Authorization: `Bearer ${user}` },
      })
      .then((response) => {
        console.log(response);
        deleteDataPortfolio();
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <DivTitle>
        <Title>{title}</Title>
      </DivTitle>
      <SubTitle>Objetivo:</SubTitle>
      <Text>{objective}</Text>
      <SubTitle>Descrição:</SubTitle>
      <Text>{description}</Text>
      <SubTitle>Recompensa:</SubTitle>
      <Text>{reward}</Text>
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex" }}>
        <Input
          name="text"
          width={30}
          height={3.2}
          placeHolder="Text"
          register={register}
        />
        <p>{errors.text?.message}</p>
        <Button
          data-testId="submitButton"
          width={32.5}
          height={5.5}
          text="Envia desafio"
          color="white"
          background="#FC923F"
        />
      </form>
    </Container>
  );
};

export default AceptedWork;
