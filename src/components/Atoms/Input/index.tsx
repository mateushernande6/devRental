import { InputStyled } from "./style";

interface Iinput {
  width: number;
  height: number;
  placeHolder: string;
}

const Input = ({ width, height, placeHolder }: Iinput) => {
  return (
    <InputStyled width={width} height={height} placeholder={placeHolder} />
  );
};

export default Input;
