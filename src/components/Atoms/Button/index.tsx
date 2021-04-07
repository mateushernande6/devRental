import { ButtonStyled } from "./style";

interface ButtonProps {
  height: string;
  width: string;
  color: string;
  text: string;
}

const Button = ({ height, width, color, text } : ButtonProps) => {
  return (
    <ButtonStyled height={height} width={width} color={color} text={'text'}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
