import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { FiUser } from "react-icons/fi";
import {
  Image,
  Container,
  Content,
  Title,
  SubTitle,
  Text,
  UlStyled,
  LiStyled,
  DivTitle,
  Line,
  BackIcon,
} from "./style";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      // padding: theme.spacing(2, 4, 3),
    },
  })
);

export default function ModalComponents() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        react-transition-group
      </button>
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
          <>
            <Container>
              <Content>
                <DivTitle>
                  <Title>DevRental</Title>
                  <Line />
                  <BackIcon>
                    <FiUser size={35} />
                  </BackIcon>
                </DivTitle>
                <SubTitle>Objetivo:</SubTitle>
                <Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy
                </Text>
                <SubTitle>Descrição:</SubTitle>
                <Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Text>
                <Text>
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </Text>
                <SubTitle>Tecnologias:</SubTitle>
                <UlStyled>
                  <LiStyled>React</LiStyled>
                  <LiStyled>JsonServe</LiStyled>
                  <LiStyled>Styles-components</LiStyled>
                  <LiStyled>Context-api</LiStyled>
                  <LiStyled>Yup</LiStyled>
                </UlStyled>
                <SubTitle>Recompensa:</SubTitle>
                <Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy
                </Text>
              </Content>

              <Image />
            </Container>
          </>
        </Fade>
      </Modal>
    </div>
  );
}
