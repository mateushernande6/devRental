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
import { useEffect, useState, useContext } from "react";
import Button from "../../components/Atoms/Button";
import ModalComponents from "../../components/Modal";
import NewWork from "../../components/newWork";
import { ComponentDev } from "../../components/ComponentDev";
import { AuthDashboardContext } from "../../Provider/AuthDashboard";
import { DataMapContext } from "../../Provider/DataMap";
import { ComponentEmp } from "../../components/ComponentEmp";
interface Iuser {
  token: string;
}

interface IdataCard {
  title: string;
  objective: string;
  description: string;
  tecnology: string[];
  reward: string;
  id: number;
}

const Dashboard = () => {
  const { valueState } = useContext(AuthDashboardContext);
  const { itemMap, setItemMap } = useContext(DataMapContext);

  const [dataCardMap, setdataCardMap] = useState<IdataCard[]>([]);
  const [category, setCategory] = useState<string>("");

  useEffect(() => {
    setdataCardMap(itemMap);
  }, [itemMap]);

  useEffect(() => {
    const idUser = JSON.parse(localStorage.getItem("userId") ?? "");
    let user: Iuser = JSON.parse(localStorage.getItem("token") ?? "");

    api
      .get(`users/${idUser}`, {
        headers: { Authorization: `Bearer ${user}` },
      })
      .then((response) => {
        setCategory(response.data.category);

        if (response.data.category === "dev") {
          cardDev();
        }
      })
      .catch((err) => console.log(err));

    if (idUser) {
      api
        .get(`jobs/?userId=${idUser}`, {
          headers: { Authorization: `Bearer ${user}` },
        })
        .then((response) => {
          setdataCardMap(response.data);
          setItemMap(response.data);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const cardDev = () => {
    let user: Iuser = JSON.parse(localStorage.getItem("token") ?? "");

    api
      .get(`jobs`, {
        headers: { Authorization: `Bearer ${user}` },
      })
      .then((response) => {
        setdataCardMap(response.data);
        setItemMap(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <DivAside>
        {category === "dev" ? <ComponentDev /> : <ComponentEmp />}
      </DivAside>
      <DivMain>
        <DivSection>
          <DivMenu>
            {category === "dev" ? (
              <>
                <ItensMenu text="Desafios" fun={() => console.log("aqui")} />
                <ItensMenu
                  text="Projetos aceitos"
                  fun={() => console.log("aqui")}
                />
                <ItensMenu text="Portfolio" fun={() => console.log("aqui")} />
              </>
            ) : (
              <>
                <ItensMenu
                  text="Desafios ativos"
                  fun={() => console.log("aqui")}
                />
              </>
            )}
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
