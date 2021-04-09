import Routes from "./routes";
import { Providers } from "./Provider/index";

const App = () => {
  return (
    <>
      <Providers>
        <Routes />
      </Providers>
    </>
  );
};

export default App;
