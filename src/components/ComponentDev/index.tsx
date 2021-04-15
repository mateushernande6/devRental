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
import {
  BsPeopleCircle,
  BsCode,
  BsPlus,
  BsFillCaretLeftFill,
} from "react-icons/bs";
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
import DeleteTech from "../DeleteTech";

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
    e.preventDefault();
    if (e.target.files?.length) {
      setFile(URL.createObjectURL(e.target.files[0]));
    }
  };
  console.log(file);
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
          <h2>Techs</h2>
          <Line />
          <DivPlus onClick={handleOpen} data-testid="divPlus">
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
              return (
                <Tecs data-testid="tech">
                  <div>
                    <BsCode />
                  </div>
                  {element.name}
                  <DeleteTech
                    id={element}
                    getTechs={getTechs}
                    data-testid="deleteTech"
                  />
                </Tecs>
              );
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
