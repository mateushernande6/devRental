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
}
interface ImodalData {
  dataObj: IitensData;
}

interface Iuser {
  token: string;
}

interface Iobj {
  id: number;
  title: string;
}

const DataCard = ({ dataObj }: ImodalData) => {
  const { valueState } = useContext(AuthDashboardContext);
  const { itemMap, setItemMap } = useContext(DataMapContext);

  const deleteCard = ({ id, title }: Iobj) => {
    const idUser = JSON.parse(localStorage.getItem("userId") ?? "");
    let user: Iuser = JSON.parse(localStorage.getItem("token") ?? "");

    console.log(user);

    api
      .delete(`jobs/${id}/?userId=${idUser}`, {
        headers: { Authorization: `Bearer ${user}` },
      })
      .then((response) => {
        const filterMap = itemMap.filter((ele) => ele.id !== id && ele);
        setItemMap(filterMap);
        console.log("card deletado");
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
          {valueState === "dev" ? (
            <BackIcon>
              <FiCheckSquare size={28} />
              <TextButton>Aceitar Desafio</TextButton>
            </BackIcon>
          ) : (
            <BackIconCam onClick={() => deleteCard(dataObj)}>
              <FiCheckSquare size={28} />
              <TextButton>Excluir Desafio</TextButton>
            </BackIconCam>
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
