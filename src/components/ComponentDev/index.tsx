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
  PhotoProfile,
  PrincipalBlock,
  DivIconUser,
  FiChevronLeftStyle,
} from "./style";
import { FiPlus } from "react-icons/fi";
import logo from "./Assets/devRental.png";
import { BsPeopleCircle, BsPlus, BsFillCaretLeftFill } from "react-icons/bs";
import {
  ChangeEvent,
  ChangeEventHandler,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import api from "../../services";
import { useHistory } from "react-router";
import { RegisterTech } from "../RegisterTech";
import ModalComponents from "../Modal";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import PublishRoundedIcon from "@material-ui/icons/PublishRounded";
interface ITech {
  name: string;
  userId: string;
}

export const ComponentDev = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tech, setTech] = useState<ITech[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [flag, setFlag] = useState(false);
  const [file, setFile] = useState<any>();

  const history = useHistory();

  useEffect(() => {
    Promise.all([getNameEmail(), getTechs()]);
  }, []);

  useEffect(() => {
    getTechs();
  }, [flag]);

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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setFile(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <Container>
      <Logo src={logo} />
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
      <BlockTecs>
        <InfoTecs>
          <h2>Tecs</h2>
          <Line />
          <DivPlus onClick={handleOpen}>
            <FiPlus />
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
              return <Tecs>{element.name}</Tecs>;
            })}
        </ContainerTecs>
      </BlockTecs>
      <ContainerLogOut onClick={handleLogOut}>
        <FiChevronLeftStyle className="Sair" />
        <h2>Sair</h2>
      </ContainerLogOut>
    </Container>
  );
};
