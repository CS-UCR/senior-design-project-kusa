import * as React from "react";
import { Outlet, Navigate, RouteProps } from "react-router";
import { UserContext } from "../../contexts/UserContext/UserContext";

export const PrivateRoute: React.FC<RouteProps> = () => {
    const userContext = React.useContext(UserContext);
    return !userContext.isLoggedIn ? <Navigate to="/" /> : <Outlet />;
};
