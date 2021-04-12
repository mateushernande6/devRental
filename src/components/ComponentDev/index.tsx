import {
  Container,
  InfoTecs,
  ContainerUsuario,
  DivPlus,
  DivUsuarioInfo,
  Line,
  Logo,
  ContainerTecs,
  DivButtons,
  Btn,
  ContainerLogOut,
} from "./style";
import logo from "./Assets/devRental.png";
import {
  BsPeopleCircle,
  BsPlus,
  BsPlusCircle,
  BsXCircle,
  BsFillCaretLeftFill,
} from "react-icons/bs";
import { useEffect, useState } from "react";
import api from "../../services";
import { useHistory } from "react-router";
import { RegisterTech } from "../RegisterTech";
import ModalComponents from "../Modal";

interface ITech {
  name: string;
}

export const ComponentDev = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [show, setShow] = useState(false);
  const [tech, setTech] = useState<ITech[]>([]);
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

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("token") ?? "");
    api
      .get(`techs/?userId=${id}`, {
        headers: { Authorization: `Bearer ${user}` },
      })
      .then((response) => {
        setTech(response.data);
      });
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const handleShow = () => {
  //   setShow(true);
  // };

  // // const handleCloseTech = () => {
  // //   setShow(false);
  // // };

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
      <InfoTecs>
        <h2>Tecs</h2>
        <Line />
        <DivPlus onClick={handleOpen}>
          <BsPlus />
        </DivPlus>
        <ModalComponents open={open} handleClose={handleClose}>
          <RegisterTech />
        </ModalComponents>
      </InfoTecs>
      {/* {show && <RegisterTech setShow={setShow}/>} */}
      <ContainerTecs>
        {tech.map((element) => {
          return <div>{element.name}</div>;
        })}
      </ContainerTecs>
      <ContainerLogOut onClick={handleLogOut}>
        <BsFillCaretLeftFill className="Sair" />
        <h2>Sair</h2>
      </ContainerLogOut>
    </Container>
  );
};
