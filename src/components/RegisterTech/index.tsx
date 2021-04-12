import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../Atoms/Input";
import { Btn, DivButtons } from "./style";
import { BsPlusCircle, BsXCircle } from "react-icons/bs";

interface IValue {
  name: string;
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

  //   const handleCloseTech = () => {
  //     setShow(false);
  //   };

  const onSubmit = (data: IValue) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="name"
        register={register}
        height={1}
        placeHolder={"Tecnologia"}
        width={10}
      />
      <p>{errors.name?.message}</p>
      <DivButtons>
        <Btn type="submit">
          <BsPlusCircle />
        </Btn>
        <Btn>
          <BsXCircle />
        </Btn>
      </DivButtons>
    </form>
  );
};
