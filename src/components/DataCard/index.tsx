import {
  Image,
  Container,
  Content,
  Title,
  SubTitle,
  Text,
  UlStyled,
  LiStyled,
  DivTitle,
  Line,
  BackIconCam,
  TextButton,
  BackIcon,
} from "./style";
import { FiCheckSquare } from "react-icons/fi";
import { useContext } from "react";
import { AuthDashboardContext } from "../../Provider/AuthDashboard";
import api from "../../services";
import { DataMapContext } from "../../Provider/DataMap";

interface IitensData {
  title: string;
  objective: string;
  description: string;
  tecnology: string[];
  reward: string;
  id: number;
  buttonBotton: string;
  buttonTop: string;
}
interface ImodalData {
  dataObj: IitensData;
}

interface Iuser {
  token: string;
}

interface Iobj {
  id: number;
}

const DataCard = ({ dataObj }: ImodalData) => {
  const { valueState } = useContext(AuthDashboardContext);
  const { itemMap, setItemMap } = useContext(DataMapContext);
  let user: Iuser = JSON.parse(localStorage.getItem("token") ?? "");
  const idUser = JSON.parse(localStorage.getItem("userId") ?? "");

  const deleteCard = (dataObj: Iobj) => {
    console.log(user);
    console.log(idUser);
    console.log(dataObj);

    api
      .delete(`jobs/${dataObj.id}/?userId=${idUser}`, {
        headers: { Authorization: `Bearer ${user}` },
      })
      .then((response) => {
        const filterMap = itemMap.filter((ele) => ele.id !== dataObj.id && ele);
        setItemMap(filterMap);
        console.log("card deletado");
      })
      .catch((err) => console.log(err));
  };

  const challengesAccepted = (dataObj: Iobj) => {
    const dataApi = {
      ...dataObj,
      userId: idUser,
      buttonTop: "desafioAceito",
      buttonBotton: "desafioAceito",
    };

    api
      .post(`accepted`, dataApi, {
        headers: { Authorization: `Bearer ${user}` },
      })
      .then((response) => {
        console.log("Cadastrado desafio aceito");
      })
      .catch((err) => console.log(err));
  };

  const addPortfolio = (dataObj: Iobj) => {
    const dataApi = {
      ...dataObj,
      userId: idUser,
      buttonTop: "",
      buttonBotton: "portfolio",
    };
    api
      .post(`portfolio`, dataApi, {
        headers: { Authorization: `Bearer ${user}` },
      })
      .then((response) => {
        console.log("Adcionado no portfolio");
        deleteCardsMenu();
      })
      .catch((err) => console.log(err));
  };

  const deleteCardsMenu = () => {
    api
      .delete(`accepted/${dataObj.id}/?userId=${idUser}`, {
        headers: { Authorization: `Bearer ${user}` },
      })
      .then((response) => {
        console.log("deletado do aceitado e add portfolio");
        const filterMap = itemMap.filter((ele) => ele.id !== dataObj.id && ele);
        setItemMap(filterMap);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <Content>
        <DivTitle>
          <Title>{dataObj.title}</Title>
          {console.log(dataObj)}
          {/* <Line /> */}
          {dataObj.buttonTop === "desafio" ? (
            <BackIcon>
              <FiCheckSquare size={28} />
              <TextButton onClick={() => challengesAccepted(dataObj)}>
                Aceitar Desafio
              </TextButton>
            </BackIcon>
          ) : dataObj.buttonTop === "excluir" ? (
            <BackIconCam onClick={() => deleteCard(dataObj)}>
              <FiCheckSquare size={28} />
              <TextButton>Excluir Desafio</TextButton>
            </BackIconCam>
          ) : dataObj.buttonTop === "desafioAceito" ? (
            <BackIconCam onClick={() => addPortfolio(dataObj)}>
              <FiCheckSquare size={28} />
              <TextButton>Desafio Concluido</TextButton>
            </BackIconCam>
          ) : (
            ""
          )}
        </DivTitle>
        <SubTitle>Objetivo:</SubTitle>
        <Text>{dataObj.objective}</Text>
        <SubTitle>Descrição:</SubTitle>
        <Text>{dataObj.description}</Text>
        <SubTitle>Tecnologias:</SubTitle>
        <UlStyled>
          {dataObj.tecnology.map((ele, index) => (
            <LiStyled key={index}>{ele}</LiStyled>
          ))}
        </UlStyled>
        <SubTitle>Recompensa:</SubTitle>
        <Text>{dataObj.reward}</Text>
      </Content>

      <Image />
    </Container>
  );
};

export default DataCard;
