import { ButtonStyled } from "./style";
import { FC } from "react";

interface buttonProps {
  height: string;
  width: string;
  color: string;
  text: string;
}

const Button: FC = ({ height, width, color, text }: buttonProps) => {
  return (
    <ButtonStyled height width color text>
      Button
    </ButtonStyled>
  );
};

export default Button;
