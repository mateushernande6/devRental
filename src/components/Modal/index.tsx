import React, { ReactNode } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {},
  })
);

interface IDataChildren {
  children: ReactNode;
  open: boolean;
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ModalComponents({
  children,
  open,
  handleClose,
}: IDataChildren) {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <>{children}</>
        </Fade>
      </Modal>
    </div>
  );
}
