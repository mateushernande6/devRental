import React from "react";
import {
  withStyles,
  Button,
  Menu,
  MenuProps,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { DivModalMobile } from "./style";
import {
  FiAlignRight,
  FiBarChart,
  FiClipboard,
  FiCoffee,
  FiLogOut,
} from "react-icons/fi";
import api from "../../services";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { DataMapContext } from "../../Provider/DataMap";
import { AuthDashboardContext } from "../../Provider/AuthDashboard";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: "rgba(66, 68, 114, 0.43)",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

interface Iuser {
  token: string;
}

export default function MenuMobile() {
  const history = useHistory();

  const { setItemMap, setCurrentWindow, setCurrentJob } = useContext(
    DataMapContext
  );

  const { setIsAuth } = useContext(AuthDashboardContext);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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

  const aceitosMenu: any = () => {
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

  const handleLogOut = () => {
    localStorage.clear();
    history.push("/login");
    setIsAuth(false);
  };

  return (
    <DivModalMobile>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        <FiAlignRight size={28} />
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={desafiosMenu}>
          <ListItemIcon>
            <FiClipboard fontSize="2.7rem" />
          </ListItemIcon>
          <ListItemText primary="Desafios" />
        </StyledMenuItem>
        <StyledMenuItem onClick={aceitosMenu}>
          <ListItemIcon>
            <FiBarChart fontSize="2.7rem" />
          </ListItemIcon>
          <ListItemText primary="Projetos aceitos" />
        </StyledMenuItem>
        <StyledMenuItem onClick={handleLogOut}>
          <ListItemIcon>
            <FiLogOut fontSize="2.7rem" />
          </ListItemIcon>
          <ListItemText primary="Sair" />
        </StyledMenuItem>
      </StyledMenu>
    </DivModalMobile>
  );
}
