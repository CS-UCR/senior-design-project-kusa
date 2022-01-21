import * as React from "react";
import { Outlet, Navigate, RouteProps } from "react-router";
import { UserContext } from "../../contexts/UserContext/UserContext";

export const PrivateRoute: React.FC<RouteProps> = () => {
    const {isLoggedIn} = React.useContext(UserContext);
    return !isLoggedIn ? <Navigate to="/" /> : <Outlet />;
};
