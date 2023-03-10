import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {MAIN_ROUTE} from "../utils/consts";
import {useSelector} from "react-redux";
import {selectUser} from "../store/reducers/userSlice";

const AppRouter = () => {
    const user = useSelector(selectUser)
    return (
        <Switch>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={MAIN_ROUTE}/>
        </Switch>
    );
};

export default AppRouter;