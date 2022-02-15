import React from "react";
import NavBar from "./components/Kusa/KusaNavBar/NavBar";
import { Home } from "./pages/Home/Home.tsx";
import { Profile } from "./pages/Profile/Profile";
import { FriendsList } from "./pages/FriendsList/FriendsList";
import { Landing } from "./pages/Landing/Landing.tsx";
import ReactDOM from "react-dom";
import {
    BrowserRouter,
    Route,
    Routes,
    useLocation,
    Navigate,
} from "react-router-dom";
import { CustomThemeProvider } from "./contexts/ThemeContext/ThemeContext";
import {
    UserContext,
    UserContextProvider,
} from "./contexts/UserContext/UserContext";
import { GlobalStyles } from "@mui/material";
import { CSSTransition } from "react-transition-group";
import { Signup } from "./pages/Signup/Signup";
import { SteamAuth } from "./pages/SteamAuth/SteamAuth";
import { AchieveContextProvider } from "./contexts/AchieveContext/AchieveContext";

import "./App.css";
import "animate.css";

function App() {
    const { isLoggedIn } = React.useContext(UserContext);

    const routes = [
        { path: "/", name: "Landing", Component: Landing },
        //public routes go here
        {
            path: "/signup",
            name: "Profile",
            publicOnlyRoute: true,
            Component: Signup,
        },
        //private routes go here
        {
            path: "/home",
            name: "Home",
            privateRoute: true,
            Component: Home,
        },
        {
            path: "/profile",
            name: "Profile",
            privateRoute: true,
            Component: Profile,
        },
        {
            path: "/friends",
            name: "FriendsList",
            privateRoute: true,
            Component: FriendsList,
        },
        {
            path: "/chat",
            name: "Chat",
            privateRoute: true,
            Component: React.Fragment,
        },
        {
            path: "/garden",
            name: "Garden",
            privateRoute: true,
            Component: React.Fragment,
        },
        {
            path: "/achievements",
            name: "Achievements",
            privateRoute: true,
            Component: React.Fragment,
        },
        {
            path: "/steamauth",
            name: "Steam Auth",
            publicOnlyRoute: true,
            Component: SteamAuth,
        },
    ];

    const AnimatedApp = React.memo(() => {
        const location = useLocation();
        return (
            <Routes>
                {routes.map(
                    ({
                        path,
                        name,
                        Component,
                        privateRoute,
                        publicOnlyRoute,
                    }) => {
                        if (publicOnlyRoute && isLoggedIn) {
                            return (
                                <Route
                                    key={name}
                                    exact
                                    path={path}
                                    element={<Navigate to="/home" />}
                                />
                            );
                        }
                        if (privateRoute && !isLoggedIn)
                            return (
                                <Route
                                    key={name}
                                    exact
                                    path={path}
                                    element={<Navigate to="/" />}
                                />
                            );
                        return (
                            <Route
                                key={name}
                                exact
                                path={path}
                                element={
                                    <CSSTransition
                                        appear
                                        in={location.pathname === path}
                                        key={name}
                                        classNames="screen"
                                        timeout={100}
                                    >
                                        <Component />
                                    </CSSTransition>
                                }
                            />
                        );
                    }
                )}
            </Routes>
        );
    });

    return (
        <div className="App">
            <GlobalStyles
                styles={(theme) => ({
                    html: {
                        height: "100%",
                    },
                    body: {
                        backgroundImage: theme.palette.primary.light,
                    },
                })}
            />
            <BrowserRouter>
                <NavBar />
                <AnimatedApp />
            </BrowserRouter>
        </div>
    );
}

const ComposeApp = () => {
    return (
        <UserContextProvider>
            <CustomThemeProvider>
                <AchieveContextProvider>
                    <App />
                </AchieveContextProvider>
            </CustomThemeProvider>
        </UserContextProvider>
    );
};

//revisit - probably not performant to be rerendering the routes on new location change

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export { ComposeApp as App };
