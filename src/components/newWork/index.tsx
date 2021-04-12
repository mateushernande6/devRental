import { Container, TextArea, ErrorMessage } from "./style";

import Input from "../Atoms/Input";
import Button from "../Atoms/Button";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../services";
import { AuthDashboardContext } from "../../Provider/AuthDashboard";
import { MouseEventHandler, useContext, useState } from "react";
import { date } from "yup";
import { DataMapContext } from "../../Provider/DataMap";

const NewWork = () => {
  const { itemMap, setItemMap } = useContext(DataMapContext);

  const [Techs, setTechs] = useState<string[]>([]);
  const [value, setValue] = useState<string>("");

  interface INewWork {
    title: string;
    objective: string;
    description: string;
    tecnology: string[];
    reward: string;
    deadline?: string;
  }

  interface Iuser {
    token: string;
  }

  const requiredField = "Campo obrigatório";

  const schema = yup.object().shape({
    title: yup.string().required(requiredField),
    objective: yup.string().required(requiredField),
    description: yup
      .string()
      .required(requiredField)
      .max(500, "máximo de 500 caracteres"),
    // workTechs: yup.string().required(requiredField),
    reward: yup.string().required(requiredField),
    workDeadline: yup.string().required(requiredField),
  });

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data: INewWork) => {
    const idUser = JSON.parse(localStorage.getItem("userId") ?? "");

    const postData = { ...data, tecnology: Techs, userId: idUser };

    let user: Iuser = JSON.parse(localStorage.getItem("token") ?? "");

    console.log(user, postData);

    api
      .post(`jobs`, postData, {
        headers: {
          Authorization: `Bearer ${user}`,
        },
      })
      .then((response) => {
        setItemMap([...itemMap, postData]);
        console.log("Desafio cadastrado na api");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleForm)}>
        <Input
          name={"title"}
          register={register}
          width={30}
          height={2.5}
          placeHolder={"Título"}
        />
        <ErrorMessage>{errors.title?.message}</ErrorMessage>

        {/*//    titulo, objetivo, descrição, tecnologias, recompensa, prazo*/}
        <TextArea {...register("objective")} placeholder="Objetivo" rows={5} />
        <ErrorMessage>{errors.objective?.message}</ErrorMessage>

        <TextArea
          {...register("description")}
          placeholder="Descrição"
          rows={10}
        />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>

        {/*<Input*/}
        {/*    name={'workTechs'}*/}
        {/*    register={register}*/}
        {/*    width={30}*/}
        {/*    height={2.5}*/}
        {/*    placeHolder={'Techs'}*/}
        {/*/>*/}

        {Techs.map((item, index) => (
          <ErrorMessage>{item}</ErrorMessage>
        ))}

        <input
          placeholder={"New tech"}
          onChange={(e) => setValue(e.target.value)}
        />

        <button
          onClick={(e) => {
            setTechs([...Techs, value]);
            e.preventDefault();
          }}
        >
          add tech
        </button>
        {/* <ErrorMessage>{errors.workTechs?.message}</ErrorMessage> */}

        <Input
          name={"reward"}
          register={register}
          width={30}
          height={2.5}
          placeHolder={"Recompensa"}
        />
        <ErrorMessage>{errors.reward?.message}</ErrorMessage>

        <Input
          name={"workDeadline"}
          register={register}
          width={30}
          height={2.5}
          placeHolder={"Prazo"}
        />
        <ErrorMessage>{errors.workDeadline?.message}</ErrorMessage>

        <Button
          height={4.7}
          width={26}
          color={"#fff"}
          text={"Adicionar"}
          background={"#fc923f"}
          // type={'submit'}
        />
      </form>
    </div>
  );
};

export default NewWork;
