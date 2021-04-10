import { ReactNode, MouseEventHandler } from "react";
import { Container } from "./style";

interface IPropsItensMenu {
  text: ReactNode;
  fun: MouseEventHandler;
}

const ItensMenu = ({ text, fun }: IPropsItensMenu) => {
  return <Container onClick={fun}>{text}</Container>;
};

export default ItensMenu;
