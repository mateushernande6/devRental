import { BsXCircle } from "react-icons/bs";
import api from "../../services";
import { Container } from "./style";

interface Iprops {
  id: number;
  getTechs: () => void;
}

export const DeleteTech = ({ id, getTechs }: Iprops) => {
  let user = JSON.parse(localStorage.getItem("token") ?? "");

  const handleDeleteTech = () => {
    api
      .delete(`techs/${id}`, {
        headers: { Authorization: `Bearer ${user}` },
      })
      .then((response) => {
        console.log(response);
        getTechs();
      });
  };

  return (
    <Container>
      <BsXCircle onClick={handleDeleteTech} />
    </Container>
  );
};
