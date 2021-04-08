import { Switch, Route } from "react-router-dom";
import Home from "../page/Home";
import Login from "../page/Login";
import Register from "../page/Register";
import PreRegister from "../page/PreRegister";
import DevDashboard from "../page/DevDashboard";
import CompanyDashboard from "../page/CompanyDashboard";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/preregister" component={PreRegister} />
      <Route exact path="/devdashboard" component={DevDashboard} />
      <Route exact path="/companydashboard" component={CompanyDashboard} />
    </Switch>
  );
};

export default Routes;
