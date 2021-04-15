import { Container, TextArea, ErrorMessage, TechsList } from "./style";

import Input from "../Atoms/Input";
import Button from "../Atoms/Button";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../services";
import { AuthDashboardContext } from "../../Provider/AuthDashboard";
import { MouseEventHandler, useContext, useState, useEffect } from "react";
import { date } from "yup";
import { DataMapContext } from "../../Provider/DataMap";
import { toast } from "react-toastify";

const NewWork = () => {
  const { itemMap, setItemMap } = useContext(DataMapContext);

  const [error, setError] = useState(false);
  const [valid, setValid] = useState(false);

  const [Techs, setTechs] = useState<string[]>([]);
  const [value, setValue] = useState<string>("");

  interface INewWork {
    title: string;
    objective: string;
    description: string;
    tecnology: string[];
    reward: string;
    deadline?: string;
    id: number;
    buttonBotton: string;
    buttonTop: string;
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

    const postData = {
      ...data,
      tecnology: Techs,
      userId: idUser,
      buttonTop: "desafio",
      buttonExcluir: "excluir",
      buttonBotton: "desafio",
    };

    let user: Iuser = JSON.parse(localStorage.getItem("token") ?? "");

    console.log(user, postData);

    api
      .post(`jobs`, postData, {
        headers: {
          Authorization: `Bearer ${user}`,
        },
      })
      .then((response) => {
        console.log(response);
        setItemMap([...itemMap, response.data]);
        setValid(true);
        reset();
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
          Não foi possivél cadastrar seu desafio
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
        <p style={{ fontSize: "1.5rem" }}>Desafio cadastrado com sucesso!</p>,
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
      <form onSubmit={handleSubmit(handleForm)} data-testid="newWorkForm">
        <Input
          data-testid="InputTitle"
          name={"title"}
          register={register}
          width={30}
          height={2.5}
          placeHolder={"Título"}
        />
        <ErrorMessage>{errors.title?.message}</ErrorMessage>

        {/*//    titulo, objetivo, descrição, tecnologias, recompensa, prazo*/}
        <TextArea
          data-testid="InputObjective"
          {...register("objective")}
          placeholder="Objetivo"
          rows={5}
        />
        <ErrorMessage>{errors.objective?.message}</ErrorMessage>

        <TextArea
          data-testid="InputDescription"
          {...register("description")}
          placeholder="Descrição"
          rows={10}
        />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>

        <h4>Techs</h4>
        <ul>
          {Techs.map((item, index) => (
            <TechsList>{item}</TechsList>
          ))}
        </ul>
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
          data-testid="InputReward"
          name={"reward"}
          register={register}
          width={30}
          height={2.5}
          placeHolder={"Recompensa"}
        />
        <ErrorMessage>{errors.reward?.message}</ErrorMessage>

        <Input
          data-testid="InputDeadline"
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
        />
      </form>
    </Container>
  );
};

export default NewWork;
