import ItensMenu from "../../components/ItensMenu";
import {
  Container,
  DivSection,
  DivMenu,
  DivAside,
  DivMain,
  ContainerCard,
} from "./style";
import Card from "../../components/Cards";
import api from "../../services";
import { useEffect, useState } from "react";

interface Iuser {
  token: string;
}

const Dashboard = () => {
  const [infoJobs, setInfoJobs] = useState([]);

  useEffect(() => {
    const idUser = JSON.parse(localStorage.getItem("userId") ?? "");
    let user: Iuser = JSON.parse(localStorage.getItem("token") ?? "");
    console.log(user);
    api
      .get(`jobs`, {
        headers: { Authorization: `Bearer ${user}` },
      })
      .then((response) => console.log(response));
  }, []);

  return (
    <Container>
      <DivAside></DivAside>
      <DivMain>
        <DivSection>
          <DivMenu>
            <ItensMenu text="Desafios" fun={() => console.log("aqui")} />
            <ItensMenu
              text="Projetos aceitos"
              fun={() => console.log("aqui")}
            />
            <ItensMenu text="Portfolio" fun={() => console.log("aqui")} />
          </DivMenu>
          <ContainerCard></ContainerCard>
        </DivSection>
      </DivMain>
    </Container>
  );
};

export default Dashboard;
