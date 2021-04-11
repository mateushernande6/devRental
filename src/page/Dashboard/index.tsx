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

interface IdataCard {
  title: string;
  objective: string;
  description: string;
  tecnology: string[];
  reward: string;
}

const Dashboard = () => {
  const [dataCardMap, setdataCardMap] = useState<IdataCard[]>([]);

  useEffect(() => {
    // const idUser = JSON.parse(localStorage.getItem("userId") ?? "");
    let user: Iuser = JSON.parse(localStorage.getItem("token") ?? "");
    console.log(user);
    api
      .get(`jobs`, {
        headers: { Authorization: `Bearer ${user}` },
      })
      .then(
        (response) => setdataCardMap(response.data)
        // console.log(response)
      )
      .catch((err) => console.log(err));
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
          <ContainerCard>
            {dataCardMap.map((ele, index) => (
              <Card key={index} title={ele.title} dataCardObj={ele} />
            ))}
          </ContainerCard>
        </DivSection>
      </DivMain>
    </Container>
  );
};

export default Dashboard;
