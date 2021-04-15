import {Route, Redirect} from "react-router-dom";
import {useContext} from 'react'
import {AuthDashboardContext} from "../Provider/AuthDashboard";

interface IPrivate {
    component: any;
    restricted: boolean;
}

export const PrivateRoute = ({component: Component, ...rest}:IPrivate) => {
    const {isAuth} = useContext(AuthDashboardContext)

    return(
        <Route {...rest} render={props => (
            isAuth ?
                <Component {...props}/>
                :   <Redirect to='/'/>
        )}/>
    )
}