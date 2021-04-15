import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../page/Home";
import Login from "../page/Login";
import Register from "../page/Register";
import PreRegister from "../page/PreRegister";
import Dashboard from "../page/Dashboard";
import NotFound from "../page/NotFound";
import {PublicRoute} from "./PublicRoute";
import {PrivateRoute} from "./PrivateRoute";

const Routes = () => {
  return (
    <Switch>
      <PublicRoute exact path='/' component={Home} restricted={true}/>
      <PublicRoute exact path='/login' component={Login} restricted={true}/>
      <PublicRoute exact path='/register' component={Register} restricted={true}/>
      <PublicRoute exact path='/preregister' component={PreRegister} restricted={true}/>

      <PrivateRoute component={Dashboard} exact path={'/dashboard'} />

      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
