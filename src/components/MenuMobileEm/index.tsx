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

import { FiAlignRight, FiLogOut } from "react-icons/fi";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
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

export default function MenuMobileEm() {
  const history = useHistory();

  const { setIsAuth } = useContext(AuthDashboardContext);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
