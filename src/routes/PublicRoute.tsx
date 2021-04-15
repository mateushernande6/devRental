import {Redirect, Route} from "react-router-dom";
import {useContext} from 'react'
import {AuthDashboardContext} from "../Provider/AuthDashboard";

interface IPublic {
    component: any;
    restricted: boolean;
}

export const PublicRoute = ({component: Component, restricted, ...rest}:IPublic) => {
    const {isAuth} = useContext(AuthDashboardContext)
    return(
        <Route {...rest} render={props => (
            isAuth && restricted ?
                <Redirect to='/dashboard'/>
                : <Component {...props}/>
        )}/>
    )
}