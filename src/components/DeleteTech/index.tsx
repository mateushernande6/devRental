import { BsXCircle } from "react-icons/bs";
import api from "../../services";
import { Container } from "./style";
import { useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
interface Iprops {
  id: number;
  getTechs: () => void;
}

export const DeleteTech = ({ id, getTechs }: Iprops) => {
  let user = JSON.parse(localStorage.getItem("token") ?? "");

  const [error, setError] = useState(false);
  const [valid, setValid] = useState(false);

  const handleDeleteTech = () => {
    api
      .delete(`techs/${id}`, {
        headers: { Authorization: `Bearer ${user}` },
      })
      .then((response) => {
        // console.log(response);
        setValid(true);
        getTechs();
      })
      .catch((err) => {
        setError(true);
      });
  };

  useEffect(() => {
    if (error) {
      toast.error(
        <p style={{ fontSize: "1.5rem" }}>
          Não foi possivel Excluir essa Tecnologia !
        </p>,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
      setError(false);
    }

    if (valid) {
      toast.success(
        <p style={{ fontSize: "1.5rem" }}>Tecnologia excluida com sucesso !</p>,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
      setValid(false);
    }
  }, [error, valid]);

  return (
    <Container>
      <BsXCircle onClick={handleDeleteTech} />
    </Container>
  );
};
