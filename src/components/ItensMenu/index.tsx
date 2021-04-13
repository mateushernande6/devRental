import { ReactNode, MouseEventHandler } from "react";
import { Container } from "./style";
import api from "../../services";
import { useContext } from "react";
import { DataMapContext } from "../../Provider/DataMap";

interface IPropsItensMenu {
  text: ReactNode;
  fun: MouseEventHandler;
}

interface Iuser {
  token: string;
}

const ItensMenu = ({ text, fun }: IPropsItensMenu) => {
  const { itemMap, setItemMap } = useContext(DataMapContext);
  let user: Iuser = JSON.parse(localStorage.getItem("token") ?? "");
  const idUser = JSON.parse(localStorage.getItem("userId") ?? "");

  const desafiosMenu: any = () => {
    console.log("Desafios");
    api
      .get(`jobs`, {
        headers: { Authorization: `Bearer ${user}` },
      })
      .then((response) => {
        setItemMap(response.data);
      })
      .catch((err) => console.log(err));
  };

  const aceitosMenu: any = () => {
    console.log("Projetos aceitos");

    api
      .get(`accepted/?userId=${idUser}`, {
        headers: { Authorization: `Bearer ${user}` },
      })
      .then((response) => {
        setItemMap(response.data);
      })
      .catch((err) => console.log(err));
  };

  const portfolioMenu: any = () => {
    console.log("Portfolio");

    api
      .get(`portfolio/?userId=${idUser}`, {
        headers: { Authorization: `Bearer ${user}` },
      })
      .then((response) => {
        setItemMap(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container
      onClick={
        text === "Projetos aceitos"
          ? aceitosMenu
          : text === "Desafios"
          ? desafiosMenu
          : text === "Portfolio"
          ? portfolioMenu
          : ""
      }
    >
      {text}
    </Container>
  );
};

export default ItensMenu;
