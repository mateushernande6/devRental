import { Switch, Route } from "react-router-dom";
import Home from "../page/Home";
import Login from "../page/Login";
import Register from "../page/Register";
import PreRegister from "../page/PreRegister";
import Dashboard from "../page/Dashboard";
import NotFound from "../page/NotFound";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/preregister" component={PreRegister} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route path="/notfound" component={NotFound} />
    </Switch>
  );
};

export default Routes;
