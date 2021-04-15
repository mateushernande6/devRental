import ItensMenu from "../../components/ItensMenu";
import {
  Container,
  DivSection,
  DivMenu,
  DivAside,
  DivMain,
  ContainerCard,
  DivMenuMobile,
  Logo,
  DivDataUser,
  ContainerUsuario,
  DivIconUser,
  DivUsuarioInfo,
  Tecs,
  ContainerTecs,
  PhotoProfile,
  BsPeopleCircleStyled,
} from "./style";
import Card from "../../components/Cards";
import api from "../../services";
import { useEffect, useState, useContext, ChangeEvent } from "react";
import Button from "../../components/Atoms/Button";
import ModalComponents from "../../components/Modal";
import NewWork from "../../components/newWork";
import { ComponentDev } from "../../components/ComponentDev";
import { AuthDashboardContext } from "../../Provider/AuthDashboard";
import { DataMapContext } from "../../Provider/DataMap";
import { ComponentEmp } from "../../components/ComponentEmp";
import MenuMobile from "../../components/MenuMobile";
import { BsPeopleCircle, BsCode } from "react-icons/bs";
import DeleteTech from "../../components/DeleteTech";
import { DataUser } from "../../Provider/DataUser";
import PublishRoundedIcon from "@material-ui/icons/PublishRounded";
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
}

interface ITech {
  name: string;
  userId: string;
  id: number;
}

const Dashboard = () => {
  const { valueState, setValueState } = useContext(AuthDashboardContext);
  const { itemMap, setItemMap } = useContext(DataMapContext);
  const { dataUser, setDataUser } = useContext(DataUser);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [tech, setTech] = useState<ITech[]>([]);

  const [dataCardMap, setdataCardMap] = useState<IdataCard[]>([]);
  const [category, setCategory] = useState<string>("");

  const [file, setFile] = useState<any>();

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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setFile(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <Container>
      <DivAside>
        <DivMenuMobile>
          <Logo src="./assets/devRental.png" />
          <MenuMobile />
        </DivMenuMobile>
        <DivDataUser>
          <ContainerUsuario>
            <DivIconUser>
              <PhotoProfile tst={file}>
                <input
                  type="file"
                  onChange={handleChange}
                  id="fileButton"
                  hidden
                />
                <label htmlFor="fileButton">
                  <PublishRoundedIcon className="iconUpload" />
                </label>
              </PhotoProfile>
            </DivIconUser>
            <DivUsuarioInfo>
              <h2>{name}</h2>
              <h3>{email}</h3>
            </DivUsuarioInfo>
          </ContainerUsuario>
          <ContainerTecs>
            {tech
              .filter((element) => {
                return element.userId == id;
              })
              .map((element) => {
                return (
                  <Tecs>
                    <div className="icon">
                      <BsCode />
                    </div>
                    {element.name}
                    <DeleteTech id={element.id} getTechs={getTechs} />
                  </Tecs>
                );
              })}
          </ContainerTecs>
        </DivDataUser>
        {category === "dev" ? <ComponentDev /> : <ComponentEmp />}
      </DivAside>
      <DivMain>
        <DivSection>
          <DivMenu>
            {category === "dev" ? (
              <>
                <ItensMenu text="Desafios" fun={() => console.log("aqui")} />
                <ItensMenu text="Projetos aceitos" fun={() => {}} />
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
