import { Container } from "./style";

interface IAceptedWork {
  title: string;
  objective: string;
  description: string;
  tecnology: string[];
  reward: string;
  workDeadline: string;
}
interface IItem {
  item: IAceptedWork;
}

const PortfolioData = ({ item }: IItem) => {
  console.log("gatos: ", item);

  return <Container>gsdghdsghdsghsd</Container>;
};

export default PortfolioData;
