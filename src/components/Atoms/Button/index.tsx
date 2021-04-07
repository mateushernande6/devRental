import { ButtonStyled } from "./style";

interface ButtonProps {
  height: string;
  width: string;
  color: string;
  text: string;
  background: string;
}

const Button = ({ height, width, color, background, text } : ButtonProps) => {
  return (
    <ButtonStyled height={height} width={width} background={background} color={color} text={'text'}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
