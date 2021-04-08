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
  click,
  background,
  height,
  width,
  color,
  text,
}: ButtonProps) => {
  return (
    <ButtonStyled
      background={background}
      height={height}
      width={width}
      color={color}
      onClick={click}
    >
      {text}
    </ButtonStyled>
  );
};

export default Button;
