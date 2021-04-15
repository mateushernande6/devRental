import {
  Container,
  ContainerUsuario,
  DivUsuarioInfo,
  Logo,
  ContainerLogOut,
  Block,
} from "./style";
import logo from "./Assets/devRental.png";
import { BsPeopleCircle, BsFillCaretLeftFill } from "react-icons/bs";
import {useContext, useEffect, useState} from "react";
import api from "../../services";
import { useHistory } from "react-router";
import { RegisterTech } from "../RegisterTech";
import ModalComponents from "../Modal";
import NewWork from "../newWork";
import Button from "../Atoms/Button";
import { PrincipalBlock } from "../ComponentEmp/style";
import {AuthDashboardContext} from "../../Provider/AuthDashboard";

export const ComponentEmp = () => {
  const {setIsAuth} = useContext(AuthDashboardContext)

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogOut = () => {
    localStorage.clear();
    history.push("/login");
    setIsAuth(false)
  };
  return (
    <Container>
      <PrincipalBlock>
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
      </PrincipalBlock>
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
