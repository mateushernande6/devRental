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
  DivLogo,
  FiPlusStyled,
  DivMobile,
  FiChevronLeftStyle,
} from "./style";
import logo from "./Assets/devRental.png";
import { BsCode } from "react-icons/bs";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import api from "../../../../services";
import { useHistory } from "react-router";
import { RegisterTech } from "../RegisterTech";
import ModalComponents from "../../../Modal";
import PublishRoundedIcon from "@material-ui/icons/PublishRounded";
import DeleteTech from "../DeleteTech";
import MenuMobile from "../../../MenuMobile";
import { AuthDashboardContext } from "../../../../Provider/AuthDashboard";
import { motion } from "framer-motion";
interface ITech {
  name: string;
  userId: string;
}

export const ComponentDev = () => {
  const { setIsAuth } = useContext(AuthDashboardContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tech, setTech] = useState<ITech[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [flag, setFlag] = useState(false);
  const [file, setFile] = useState<any>(
    "https://trello-attachments.s3.amazonaws.com/606b10067cfa4c6475fdeb36/607af5dc5e8017326744014f/c61ec116defd59163d2c579734234870/user-end-profile-dashboard.png"
  );

  const history = useHistory();

  useEffect(() => {
    Promise.all([getNameEmail(), getTechs()]);
  }, []);

  useEffect(() => {
    getTechs();
  }, [flag]);

  const id = JSON.parse(localStorage.getItem("userId") ?? "");
  const token = JSON.parse(localStorage.getItem("token") ?? "");
  const getNameEmail = () => {
    const users = "users/" + id;
    api
      .get(users, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        if (response.data.src !== "") {
          setFile(response.data.src);
        }
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
    setIsAuth(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const users = "users/" + id;
    if (e.target.files?.length) {
      const photoUser = URL.createObjectURL(e.target.files[0]);
      api
        .patch(
          users,
          { src: `${photoUser}` },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((response) => {
          setFile(response.data.src);
        })
        .catch((err) => err.response);
    }
  };

  return (
    <motion.div
      initial={{ translateX: "-100%" }}
      animate={{ translateX: "0%" }}
      transition={{ duration: 0.7 }}
    >
      <Container>
        <motion.div
          initial={{ translateY: "100%" }}
          animate={{ translateY: "0%" }}
          transition={{ duration: 0.7 }}
        >
          <DivLogo>
            <Logo src={logo} />
            <MenuMobile />
          </DivLogo>
        </motion.div>
        <DivMobile>
          <ContainerUsuario>
            <PhotoProfile tst={file}>
              <input
                type="file"
                onChange={handleChange}
                id="fileButton"
                hidden
              />
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
                <FiPlusStyled />
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
                      <div className="divButton">
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
        </DivMobile>

        <ContainerLogOut onClick={handleLogOut}>
          <FiChevronLeftStyle className="Sair" />
          <h2>Sair</h2>
        </ContainerLogOut>
      </Container>
    </motion.div>
  );
};
