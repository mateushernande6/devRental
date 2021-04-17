import ItensMenu from "../../components/DashboardParts/Common/ItensMenu";
import {
  Container,
  DivSection,
  DivMenu,
  DivAside,
  DivMain,
  ContainerCard,
} from "./style";
import Card from "../../components/DashboardParts/Common/Cards";
import api from "../../services";
import { useEffect, useState, useContext } from "react";
import { ComponentDev } from "../../components/DashboardParts/Dev/ComponentDev";
import { AuthDashboardContext } from "../../Provider/AuthDashboard";
import { DataMapContext } from "../../Provider/DataMap";
import { ComponentEmp } from "../../components/DashboardParts/Company/ComponentEmp";
import { DataUser } from "../../Provider/DataUser";
import { motion } from "framer-motion";
import AceptedWork from "../../components/AceptedWork";

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
  buttonBotton: string;
  buttonExcluir: string;
  buttonTop: string;
  acceptedId: number;
  users: string[];
}

interface ITech {
  name: string;
  userId: string;
  id: number;
}

const Dashboard = () => {
  const { valueState, setValueState } = useContext(AuthDashboardContext);
  const { itemMap, setItemMap, currentWindow, setCurrentWindow, currentJob } = useContext(DataMapContext);
  const { dataUser, setDataUser } = useContext(DataUser);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [tech, setTech] = useState<ITech[]>([]);

  const [dataCardMap, setdataCardMap] = useState<IdataCard[]>([]);
  const [category, setCategory] = useState<string>("");

  const id = JSON.parse(localStorage.getItem("userId") ?? "");

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
        setValueState(response.data.category);
        setDataUser(response.data.category);
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
        getNameEmail();
        getTechs();
        setItemMap(response.data);
      })
      .catch((err) => console.log(err));
  };

  const getNameEmail = () => {
    const id = JSON.parse(localStorage.getItem("userId") ?? "");
    const users = "users/" + id;
    let user = JSON.parse(localStorage.getItem("token") ?? "");
    api
      .get(users, {
        headers: { Authorization: `Bearer ${user}` },
      })
      .then((response) => {
        setName(response.data.name);
        setEmail(response.data.email);
      });
  };

  const getTechs = () => {
    let user = JSON.parse(localStorage.getItem("token") ?? "");
    api
      .get(`techs`, {
        headers: { Authorization: `Bearer ${user}` },
      })
      .then((response) => {
        setTech(response.data);
      });
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
                <ItensMenu text="Desafios" fun={() => {}} />
                <ItensMenu text="Projetos aceitos" fun={() => {}} />
                <ItensMenu text="Portfolio" fun={() => {}} />
              </>
            ) : (
              <>
                <ItensMenu text="Desafios ativos" fun={() => {}} />
              </>
            )}
          </DivMenu>
          <ContainerCard>

            {currentWindow === 'Desafios' &&  dataCardMap.map((ele, index) => (
                  <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.7 }}
                  >
                    <Card key={index} title={ele.title} dataCardObj={ele} />
                  </motion.div>
              ))}

            {currentWindow === 'Desafios aceitos' &&
            <>
              {console.log(currentJob)}
            <AceptedWork item={currentJob}/>
            </>
            }

          </ContainerCard>
        </DivSection>
      </DivMain>
    </Container>
  );
};

export default Dashboard;
