import { ReactNode, MouseEventHandler } from "react";
import { Container } from "./style";
import api from "../../../../services";
import { useContext } from "react";
import { DataMapContext } from "../../../../Provider/DataMap";
import { motion } from "framer-motion";

interface IPropsItensMenu {
  text: ReactNode;
  fun: MouseEventHandler;
}

interface Iuser {
  token: string;
}

const ItensMenu = ({ text }: IPropsItensMenu) => {
  const { setItemMap, setCurrentWindow, setCurrentJob } = useContext(
    DataMapContext
  );
  let user: Iuser = JSON.parse(localStorage.getItem("token") ?? "");
  const idUser = JSON.parse(localStorage.getItem("userId") ?? "");

  const desafiosMenu: any = () => {
    setCurrentWindow("Desafios");

    api
      .get(`jobs`, {
        headers: { Authorization: `Bearer ${user}` },
      })
      .then((response) => {
        setItemMap(response.data);
      })
      .catch((err) => console.log(err));
  };

  const AceitosMenu: any = () => {
    setCurrentWindow("Desafios aceitos");

    let step1 = localStorage.getItem("acceptedId") || "";

    const { acceptedId } = JSON.parse(step1);

    api
      .get(`/jobs/${acceptedId}/`, {
        headers: { Authorization: `Bearer ${user}` },
      })
      .then((response) => {
        setCurrentJob(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  const portfolioMenu: any = () => {
    setCurrentWindow("Portfolio");

    api
      .get(`portfolio/?userId=${idUser}`, {
        headers: { Authorization: `Bearer ${user}` },
      })
      .then((response) => {
        setItemMap(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <motion.div
      initial={{ translateX: "100%" }}
      animate={{ translateX: "0%" }}
      transition={{ duration: 0.7 }}
    >
      <Container
        onClick={
          text === "Projetos aceitos"
            ? AceitosMenu
            : text === "Desafios"
            ? desafiosMenu
            : text === "Portfolio"
            ? portfolioMenu
            : ""
        }
      >
        {text}
      </Container>
    </motion.div>
  );
};

export default ItensMenu;
