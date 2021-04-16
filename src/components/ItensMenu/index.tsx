import {ReactNode, MouseEventHandler, useState, useEffect} from "react";
import { Container } from "./style";
import api from "../../services";
import { useContext } from "react";
import { DataMapContext } from "../../Provider/DataMap";
import {AuthDashboardContext} from "../../Provider/AuthDashboard";

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

  const AceitosMenu: any = () => {
    let step1 = localStorage.getItem('acceptedId') || ''

    const {acceptedId} = JSON.parse(step1)

    {console.log(acceptedId)}
    console.log("Projetos aceitos");

    api
      .get(`/jobs/${acceptedId}/`, {
        headers: { Authorization: `Bearer ${user}` },
      })
      .then((response) => {
        setItemMap([response.data]);
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
          ? AceitosMenu
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
