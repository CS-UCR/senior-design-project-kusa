import React from "react";
import NavBar from "./components/KusaNavBar/NavBar";
import Home from "./pages/Home/Home";
import { Profile } from "./pages/Profile/Profile";
import { PrivateRoute } from "./routes/PrivateRoute/PrivateRoute";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { CustomThemeProvider } from "./contexts/ThemeContext/ThemeContext";
import { UserContextProvider } from "./contexts/UserContext/UserContext";
import { GlobalStyles } from "@mui/material";
import { CSSTransition } from "react-transition-group";
import "animate.css";
import "./App.css";

/* 
<Route path="/garden" element={Garden} />
<Route path="/chat" element={Chat} />
<Route path="/friends" element={Friends} />           
<Route path="/achievements" element={Achievements} />
<Route path="/account" element={Account} />
<Route path="/settings" element={Settings} /> 
*/

const routes = [
    { path: "/", name: "Home", Component: Home },
    //public routes go here
    { path: "/", name: "Home", Component: PrivateRoute },
    //private routes go here
    { path: "/profile", name: "Profile", Component: Profile },
];

function App() {
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

//revisit - probably not performant to be rerendering the routes on new location change -> see if memo improves
const AnimatedApp = () => {
    const location = useLocation();
    return (
        <Routes>
            {routes.map(({ path, name, Component }) => {
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
                                classNames="fade"
                                timeout={100}
                            >
                                <Component />
                            </CSSTransition>
                        }
                    />
                );
            })}
        </Routes>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export { ComposeApp as App };
