import { MouseEventHandler } from "react";
import { ReactNode } from "react";
import { ButtonStyled } from "./style";

interface ButtonProps {
  height: number;
  width: number;
  color: string;
  text: ReactNode;
  background: string;
  click: MouseEventHandler;
}

<<<<<<< HEAD
const Button = ({
  height,
  width,
  color,
  background,
  text,
  click,
}: ButtonProps) => {
  return (
    <ButtonStyled
      height={height}
      width={width}
      background={background}
      color={color}
      onClick={click}
    >
=======
const Button = ({ height, width, color, text }: ButtonProps) => {
  return (
    <ButtonStyled height={height} width={width} color={color}>
>>>>>>> c3678e9800bb812ec799ebd1f744d63cf63cde2f
      {text}
    </ButtonStyled>
  );
};

export default Button;
