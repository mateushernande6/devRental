import { InputHTMLAttributes } from "react";
import { FieldValues } from "react-hook-form";
import { UseFormRegister } from "react-hook-form";
import { InputStyled } from "./style";

interface Iinput extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  register: UseFormRegister<FieldValues>;
  width: number;
  height: number;
  placeHolder: string;
}

const Input = ({
  width,
  height,
  placeHolder,
  name,
  register,
  ...rest
}: Iinput) => {
  return (
    <InputStyled
      id={name}
      {...register(name)}
      name={name}
      width={width}
      height={height}
      placeholder={placeHolder}
      {...rest}
    />
  );
};

export default Input;
