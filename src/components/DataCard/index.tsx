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
import { useContext, useState, useEffect } from "react";
import { AuthDashboardContext } from "../../Provider/AuthDashboard";
import api from "../../services";
import { DataMapContext } from "../../Provider/DataMap";
import { toast } from "react-toastify";
import { DataUser } from "../../Provider/DataUser";

interface IitensData {
  title: string;
  objective: string;
  description: string;
  tecnology: string[];
  reward: string;
  id: number;
  buttonBotton: string;
  buttonTop: string;
  buttonExcluir: string;
  users: string[];
}
interface ImodalData {
  dataObj: IitensData;
}

interface Iuser {
  token: string;
}

interface Iobj {
  users: string[];
  id: number;
}

const DataCard = ({ dataObj }: ImodalData) => {
  const { valueState } = useContext(AuthDashboardContext);
  const { dataUser } = useContext(DataUser);

  const [category, setCategory] = useState<string>("");
  const { itemMap, setItemMap } = useContext(DataMapContext);
  let user: Iuser = JSON.parse(localStorage.getItem("token") ?? "");
  const idUser = JSON.parse(localStorage.getItem("userId") ?? "");

  useEffect(() => {
    setCategory(dataUser);
  }, []);

  const deleteCard = (dataObj: Iobj) => {
    api
      .delete(`jobs/${dataObj.id}/?userId=${idUser}`, {
        headers: { Authorization: `Bearer ${user}` },
      })
      .then((response) => {
        const filterMap = itemMap.filter((ele) => ele.id !== dataObj.id && ele);
        setItemMap(filterMap);
        // console.log("card deletado");

        toast.success(
          <p style={{ fontSize: "1.5rem" }}>Card deletado com sucesso !</p>,
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      })
      .catch((err) => console.log(err));
  };

  const challengesAccepted =  (dataObj: Iobj) => {

    const {id} = dataObj

    const dataApi = {

      acceptedId: id,

      buttonTop: "desafioAceito",
      buttonBotton: "desafioAceito",
    };

    api
      .patch(`users/${idUser}/`, dataApi, {
        headers: { Authorization: `Bearer ${user}` },
      })
      .then((response) => {
         localStorage.setItem('acceptedId', JSON.stringify(response.data));
        toast.success(
          <p style={{ fontSize: "1.5rem" }}>Desafio aceito com sucesso !</p>,
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      })
      .catch((err) => {
        toast.error(
          <p style={{ fontSize: "1.5rem" }}>
            Não foi possivel aceitar esse desafio !
          </p>,
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
        console.log(err);
      });
  };

  const addPortfolio = (dataObj: Iobj) => {
    const {} = dataObj;

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

        toast.success(
          <p style={{ fontSize: "1.5rem" }}>
            Desafio cadastro no portfolio com sucesso.
          </p>,
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      })
      .catch((err) => {
        toast.error(
          <p style={{ fontSize: "1.5rem" }}>
            Não foi possivel adcionar no portfolio !
          </p>,
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
        console.log(err);
      });
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
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <Content>
        <DivTitle>
          <Title>{dataObj.title}</Title>
          {category === "company" ? (
            dataObj.buttonExcluir === "excluir" ? (
              <BackIconCam onClick={() => deleteCard(dataObj)}>
                <FiCheckSquare size={28} />
                <TextButton>Excluir Desafio</TextButton>
              </BackIconCam>
            ) : (
              ""
            )
          ) : dataObj.buttonTop === "desafio" ? (
            <BackIconCam onClick={() => challengesAccepted(dataObj)}>
              <FiCheckSquare size={28} />
              <TextButton> Aceitar Desafio</TextButton>
            </BackIconCam>
          ) : dataObj.buttonTop === "desafioAceito" ? (
            <BackIcon onClick={() => addPortfolio(dataObj)}>
              <FiCheckSquare size={28} />
              <TextButton>Desafio Concluido</TextButton>
            </BackIcon>
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
