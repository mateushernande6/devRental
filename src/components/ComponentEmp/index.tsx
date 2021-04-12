import {
  Container,
  ContainerUsuario,
  DivUsuarioInfo,
  Logo,
  ContainerLogOut,
  Block,
} from "./style";
import logo from "./Assets/devRental.png";
import { BsPeopleCircle, BsPlus, BsFillCaretLeftFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import api from "../../services";
import { useHistory } from "react-router";
import { RegisterTech } from "../RegisterTech";
import ModalComponents from "../Modal";
import NewWork from "../newWork";
import Button from "../Atoms/Button";

export const ComponentEmp = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  //   const [tech, setTech] = useState<ITech[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const history = useHistory();

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("userId") ?? "");
    setId(id);
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
  }, []);

  //   useEffect(() => {
  //     let user = JSON.parse(localStorage.getItem("token") ?? "");
  //     api
  //       .get(`techs/?userId=${id}`, {
  //         headers: { Authorization: `Bearer ${user}` },
  //       })
  //       .then((response) => {
  //         setTech(response.data);
  //       });
  //   }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogOut = () => {
    localStorage.clear();
    history.push("/login");
  };
  return (
    <Container>
      <Logo src={logo} />
      <ContainerUsuario>
        <div>
          <BsPeopleCircle />
        </div>
        <DivUsuarioInfo>
          <h2>{name}</h2>
          <h3>{email}</h3>
        </DivUsuarioInfo>
      </ContainerUsuario>
      <Block>
        <Button
          height={4.7}
          width={26}
          color={"#fff"}
          text={"Novo trabalho"}
          background={"#fc923f"}
          click={handleOpen}
        />
        <ModalComponents open={open} handleClose={handleClose}>
          <NewWork />
        </ModalComponents>
      </Block>
      <ContainerLogOut onClick={handleLogOut}>
        <BsFillCaretLeftFill className="Sair" />
        <h2>Sair</h2>
      </ContainerLogOut>
    </Container>
  );
};
