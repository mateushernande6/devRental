import { useState, useContext, useEffect } from "react";
import { Container, DivUser, DivBack } from "./style";
import ModalComponents from "../../../Modal";
import DataCard from "../DataCard";
import Button from "../../../Reusables/Button";
import { DataUser } from "../../../../Provider/DataUser";
import {
  FiUsers,
  FiBarChart2,
  FiClipboard,
  FiSun,
  FiCoffee,
} from "react-icons/fi";
import api from "../../../../services";
import { DataMapContext } from "../../../../Provider/DataMap";

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
  acceptedId: number;
  users: string[];
}
interface Props {
  title: string;
  dataCardObj: IitensData;
}

const Card = ({ title, dataCardObj }: Props) => {
  const [open, setOpen] = useState(false);

  const [dataAccepted, setDataAccepted] = useState<IitensData[]>([]);

  const { dataUser } = useContext(DataUser);

  const { setDataAcceptedContext } = useContext(DataMapContext);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("token") ?? "");

    api
      .get(`users/?acceptedId_like=${dataCardObj.id}`, {
        headers: { Authorization: `Bearer ${user}` },
      })
      .then((response) => {
        setDataAccepted(response.data);
        setDataAcceptedContext(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [title]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <>
        {dataUser === "company" && (
          <DivUser>
            <FiUsers size={20} />
            {dataAccepted.length}
          </DivUser>
        )}

        <image>
          {dataUser === "company" ? (
            <DivBack>
              <FiBarChart2 size={50} />
            </DivBack>
          ) : dataCardObj.buttonTop === "desafio" ? (
            <DivBack>
              <FiClipboard size={50} />
            </DivBack>
          ) : dataCardObj.buttonTop === "desafioAceito" ? (
            <DivBack>
              <FiSun size={50} />
            </DivBack>
          ) : (
            <DivBack>
              <FiCoffee size={50} />
            </DivBack>
          )}
        </image>
        <section>
          <p>{title}</p>
        </section>
        {dataCardObj.buttonBotton === "desafio" ? (
          <Button
            width={18}
            background="rgb(252, 146, 63, 0.86)"
            color="#fcfbff"
            height={3.7}
            text="Ver mais"
            click={handleOpen}
          />
        ) : dataCardObj.buttonBotton === "desafioAceito" ? (
          <Button
            width={18}
            background="#49D2A2"
            color="#fcfbff"
            height={3.7}
            text="Detalhes"
            click={handleOpen}
          />
        ) : dataCardObj.buttonBotton === "portfolio" ? (
          <Button
            width={18}
            background="#e04552"
            color="#fcfbff"
            height={3.7}
            text="Ver mais"
            click={handleOpen}
          />
        ) : (
          ""
        )}
        <>
          <ModalComponents open={open} handleClose={handleClose}>
            <DataCard dataObj={dataCardObj} />
          </ModalComponents>
        </>
      </>
    </Container>
  );
};
export default Card;
