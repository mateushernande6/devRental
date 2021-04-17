import {
  Container,
  ContainerUsuario,
  DivUsuarioInfo,
  Logo,
  ContainerLogOut,
  Block,
  ButtonDiv,
  Icon,
  PhotoProfile,
  DivLogo,
} from "./style";
import logo from "./Assets/devRental.png";
import { BsPeopleCircle, BsFillCaretLeftFill } from "react-icons/bs";
import { FiPlus, FiChevronLeft } from "react-icons/fi";

import { useContext, useEffect, useState, ChangeEvent } from "react";
import api from "../../../../services";
import { useHistory } from "react-router";
import { RegisterTech } from "../../Dev/RegisterTech";
import PublishRoundedIcon from "@material-ui/icons/PublishRounded";

import ModalComponents from "../../../Modal";
import NewWork from "../newWork";
import Button from "../../../Reusables/Button";
import { PrincipalBlock } from "./style";
import { AuthDashboardContext } from "../../../../Provider/AuthDashboard";
import MenuMobileEm from "../../../MenuMobileEm";

export const ComponentEmp = () => {
  const { setIsAuth } = useContext(AuthDashboardContext);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState<boolean>(false);
  const [file, setFile] = useState<any>();

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
        console.log("dataUserEmp", response);
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
    setIsAuth(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files?.length) {
      setFile(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <Container>
      <DivLogo>
        <Logo src={logo} />
        <MenuMobileEm />
      </DivLogo>
      <PrincipalBlock>
        <ContainerUsuario>
          <PhotoProfile tst={file}>
            <input type="file" onChange={handleChange} id="fileButton" hidden />
            <label htmlFor="fileButton">
              <PublishRoundedIcon className="iconUpload" />
            </label>
          </PhotoProfile>
          <DivUsuarioInfo>
            <h2>{name}</h2>
            <h3>{email}</h3>
          </DivUsuarioInfo>
        </ContainerUsuario>
        <ButtonDiv onClick={handleOpen}>
          <Icon>
            <FiPlus />
          </Icon>
          <p>Novo desafio</p>
        </ButtonDiv>
      </PrincipalBlock>
      <Block>
        <ModalComponents open={open} handleClose={handleClose}>
          <NewWork />
        </ModalComponents>
      </Block>
      <ContainerLogOut onClick={handleLogOut}>
        <FiChevronLeft className="Sair" />
        <h2>Sair</h2>
      </ContainerLogOut>
    </Container>
  );
};
