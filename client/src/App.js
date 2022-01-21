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
import { Login } from "./pages/Login/Login";
import { Signup } from "./pages/Signup/Signup";
import "./App.css";
import "animate.css";

function App() {
    const { isLoggedIn } = React.useContext(UserContext);

    const privateRoute = (Component) =>
        isLoggedIn ? Component : <Navigate to="?" />;

    const routes = [
        { path: "/", name: "Landing", Component: Landing },
        //public routes go here
        { path: "/login", name: "Home", Component: Login },
        { path: "/signup", name: "Profile", Component: Signup },
        //private routes go here
        {
            path: "/home",
            name: "Home",
            Component: privateRoute(Home),
        },
        {
            path: "/profile",
            name: "Profile",
            Component: privateRoute(Profile),
        },
        { path: "/friends", name: "FriendsList", Component: FriendsList },
    ];

    const AnimatedApp = React.memo(() => {
        const location = useLocation();
        return (
            <Routes>
                {routes.map(({ path, name, Component }) => {
                    return (
                        <Route
                            key={name}
                            exact
                            path={path}
                            render={() => (
                                <CSSTransition
                                    appear
                                    in={location.pathname === path}
                                    key={name}
                                    classNames="screen"
                                    timeout={100}
                                >
                                    <Component />
                                </CSSTransition>
                            )}
                        />
                    );
                })}
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
                <App />
            </CustomThemeProvider>
        </UserContextProvider>
    );
};

//revisit - probably not performant to be rerendering the routes on new location change

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export { ComposeApp as App };
