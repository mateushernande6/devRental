import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu, { MenuProps } from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
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

  const { setIsAuth } = useContext(AuthDashboardContext);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { itemMap, setItemMap } = useContext(DataMapContext);
  let user: Iuser = JSON.parse(localStorage.getItem("token") ?? "");
  const idUser = JSON.parse(localStorage.getItem("userId") ?? "");

  const desafiosMenu: any = () => {
    console.log("Desafios");
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
    console.log("Projetos aceitos");

    api
      .get(`accepted/?userId=${idUser}`, {
        headers: { Authorization: `Bearer ${user}` },
      })
      .then((response) => {
        setItemMap(response.data);
      })
      .catch((err) => console.log(err));
  };

  const portfolioMenu: any = () => {
    console.log("Portfolio");

    api
      .get(`portfolio/?userId=${idUser}`, {
        headers: { Authorization: `Bearer ${user}` },
      })
      .then((response) => {
        setItemMap(response.data);
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
        <StyledMenuItem onClick={portfolioMenu}>
          <ListItemIcon>
            <FiCoffee fontSize="2.7rem" />
          </ListItemIcon>
          <ListItemText primary="Portfolio" />
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
