import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../page/Home";
import Login from "../page/Login";
import Register from "../page/Register";
import PreRegister from "../page/PreRegister";
import Dashboard from "../page/Dashboard";
import NotFound from "../page/NotFound";

interface IPrevate {
  component: any;
  path: string;
}

const token = localStorage.getItem("token");

const PrivateRoute = ({ component: Component, ...rest }: IPrevate) => (
  <Route
    {...rest}
    render={(props) =>
      token ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/preregister" component={PreRegister} />

      <PrivateRoute path="/dashboard" component={Dashboard} />

      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
