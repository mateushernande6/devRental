import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../../../Reusables/Input";
import { Container, DivButtons, P, FormStyled } from "./style";
import { useState, useEffect } from "react";
import api from "../../../../services";
import Button from "../../../Reusables/Button";
import { toast } from "react-toastify";

interface IValue {
  name: string;
  userId: string;
}

interface IProps {
  getTechs: () => void;
}

export const RegisterTech = ({ getTechs }: IProps) => {
  const [error, setError] = useState(false);
  const [valid, setValid] = useState(false);

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
        // console.log(response);
        setValid(true);
      })
      .catch((err) => {
        setError(true);
      });
    reset();
    getTechs();
  };

  useEffect(() => {
    if (error) {
      toast.error(
        <p style={{ fontSize: "1.5rem" }}>
          Não foi possivel cadastrar essa Tecnologia !
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
        <p style={{ fontSize: "1.5rem" }}>
          Tecnologia cadastrada com sucesso !
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
      setValid(false);
    }
  }, [error, valid]);

  return (
    <Container>
      <h2>Qual tech você conhece?</h2>
      <FormStyled onSubmit={handleSubmit(onSubmit)} data-testid="formTech">
        <Input
          data-testid="inputRegister"
          name="name"
          register={register}
          height={1}
          placeHolder={"Tecnologia"}
          width={10}
        />
        <P>{errors.name?.message}</P>
        <Button
          data-testid="buttonRegister"
          height={3.5}
          width={7}
          color={"#fff"}
          text={"Ok"}
          background={"#fc923f"}
        />
      </FormStyled>
    </Container>
  );
};
