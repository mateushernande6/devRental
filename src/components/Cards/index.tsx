import { useState } from "react";
import { Container, ImgCard } from "./style";
import ModalComponents from "../Modal";
import DataCard from "../DataCard";
import Button from "../Atoms/Button";

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
interface Props {
  title: string;
  dataCardObj: IitensData;
}

const Card = ({ title, dataCardObj }: Props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <>
        {console.log(dataCardObj)}
        <image>
          <ImgCard src="https://picsum.photos/200/200" />
        </image>
        <section>
          <p>{title}</p>
        </section>
        {dataCardObj.buttonBotton === "desafio" ? (
          <Button
            width={20}
            background="#FC923F"
            color=""
            height={4}
            text="Ver mais"
            click={handleOpen}
          />
        ) : dataCardObj.buttonBotton === "desafioAceito" ? (
          <Button
            width={20}
            background="#49D2A2"
            color=""
            height={4}
            text="Detalhes"
            click={handleOpen}
          />
        ) : dataCardObj.buttonBotton === "portfolio" ? (
          <Button
            width={20}
            background="#e04552"
            color=""
            height={4}
            text="Ver mais"
            click={handleOpen}
          />
        ) : (
          ""
        )}
        {/* <Button
          width={20}
          background="#FC923F"
          color=""
          height={4}
          text="Ver mais"
          click={handleOpen}
        /> */}
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
