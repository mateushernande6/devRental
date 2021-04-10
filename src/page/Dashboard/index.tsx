import ItensMenu from "../../components/ItensMenu";
import ModalComponents from "../../components/Modal";
import { Container, DivSection, DivMenu, DivAside, DivMain } from "./style";
import Card from "../../components/Cards";

const Dashboard = () => {
  return (
    <Container>
      <DivAside></DivAside>
      <DivMain>
        <DivSection>
          <DivMenu>
            <ItensMenu text="Desafios" fun={() => console.log("aqui")} />
            <ItensMenu
              text="Projetos aceitos"
              fun={() => console.log("aqui")}
            />
            <ItensMenu text="Portfolio" fun={() => console.log("aqui")} />
            <button>
              <ModalComponents />
            </button>
          </DivMenu>
        </DivSection>
      </DivMain>
    </Container>
  );
};

export default Dashboard;
