import { Container, ImgCard } from "./style";
import ModalComponents from "../Modal";
import DataCard from "../DataCard";

interface Props {
  title: string;
}

const Card = ({ title }: Props) => {
  return (
    <Container>
      <>
        <image>
          <ImgCard src="https://picsum.photos/200/200" />
        </image>
        <section>
          <p>{title}</p>
        </section>
        <>
          <ModalComponents>
            <DataCard />
          </ModalComponents>
        </>
      </>
    </Container>
  );
};
export default Card;
