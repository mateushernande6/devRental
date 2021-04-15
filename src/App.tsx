import Routes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Providers } from "./Provider/index";

const App = () => {
  return (
    <>
      <Providers>
        <Routes />
        <ToastContainer />
      </Providers>
    </>
  );
};

export default App;
