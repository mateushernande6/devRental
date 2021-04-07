import Routes from "./routes";
import Button from "./components/Atoms/Button";
import { FC } from "react";
const App: FC = () => {
  return (
    <>
      <Routes />
      <Button
        height={3}
        width={60}
        background="red"
        color="white"
        text="myButoon"
        click={() => console.log("click")}
      />
    </>
  );
};

export default App;
