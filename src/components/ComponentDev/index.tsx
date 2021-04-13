import {
  Container,
  InfoTecs,
  ContainerUsuario,
  DivPlus,
  DivUsuarioInfo,
  Line,
  Logo,
  ContainerTecs,
  ContainerLogOut,
  Tecs,
  BlockTecs,
  PrincipalBlock,
} from "./style";
import logo from "./Assets/devRental.png";
import {
  BsPeopleCircle,
  BsPlus,
  BsFillCaretLeftFill,
  BsCode,
} from "react-icons/bs";
import { useEffect, useState } from "react";
import api from "../../services";
import { useHistory } from "react-router";
import { RegisterTech } from "../RegisterTech";
import ModalComponents from "../Modal";
import { DeleteTech } from "../DeleteTech";

interface ITech {
  name: string;
  userId: string;
  id: number;
}

export const ComponentDev = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tech, setTech] = useState<ITech[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const history = useHistory();

  useEffect(() => {
    Promise.all([getNameEmail(), getTechs()]);
  }, []);

  const getNameEmail = () => {
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
  };

  const getTechs = () => {
    let user = JSON.parse(localStorage.getItem("token") ?? "");
    api
      .get(`techs`, {
        headers: { Authorization: `Bearer ${user}` },
      })
      .then((response) => {
        setTech(response.data);
      });
  };

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
      <BlockTecs>
        <InfoTecs>
          <h2>Tecs</h2>
          <Line />
          <DivPlus onClick={handleOpen}>
            <BsPlus />
          </DivPlus>
          <ModalComponents open={open} handleClose={handleClose}>
            <RegisterTech getTechs={getTechs} />
          </ModalComponents>
        </InfoTecs>
        <ContainerTecs>
          {tech
            .filter((element) => {
              return element.userId == id;
            })
            .map((element) => {
              return (
                <Tecs>
                  <div>
                    <BsCode />
                  </div>
                  {element.name}
                  <DeleteTech id={element.id} getTechs={getTechs} />
                </Tecs>
              );
            })}
        </ContainerTecs>
      </BlockTecs>
      <ContainerLogOut onClick={handleLogOut}>
        <BsFillCaretLeftFill className="Sair" />
        <h2>Sair</h2>
      </ContainerLogOut>
    </Container>
  );
};
