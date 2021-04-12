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
<<<<<<< HEAD
import Button from "../../components/Atoms/Button";
import ModalComponents from "../../components/Modal";
import NewWork from "../../components/newWork";
=======
import { ComponentDev } from "../../components/ComponentDev";
>>>>>>> db8eb4692a445d8876348739ceab6eaad1c46f16

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

  const [open, setOpen] = useState(false)

  const handleOpen = ()=>{
    setOpen(true)
  }
  const handleClose = ()=>{
    setOpen(false)
  }

  const [dataCardMap, setdataCardMap] = useState<IdataCard[]>([]);
  const [category, setCategory] = useState<string>("");

  useEffect(() => {
    const idUser = JSON.parse(localStorage.getItem("userId") ?? "");
    let user: Iuser = JSON.parse(localStorage.getItem("token") ?? "");

    api
      .get(`users/${idUser}`, {
        headers: { Authorization: `Bearer ${user}` },
      })
      .then((response) => {
        setCategory(response.data.category);
      })
      .catch((err) => console.log(err));

    if (idUser) {
      api
        .get(`jobs/?userId=1`, {
          headers: { Authorization: `Bearer ${user}` },
        })
        .then((response) => {
          setdataCardMap(response.data);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <Container>
      <DivAside>
<<<<<<< HEAD
        <Button
            height={4.7}
            width={26}
            color={"#fff"}
            text={"Novo trabalho"}
            background={"#fc923f"}
            click={handleOpen}
        />
    <ModalComponents open={open} handleClose={handleClose}>
        <NewWork/>
    </ModalComponents>

=======
        <ComponentDev />
>>>>>>> db8eb4692a445d8876348739ceab6eaad1c46f16
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
                <ItensMenu
                  text="Desafios fechados"
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
