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
      {text}
    </ButtonStyled>
  );
};

export default Button;
