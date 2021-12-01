import React from "react";
import NavBar from "./components/KusaNavBar/NavBar";
import { Home } from "./pages/Home/Home.tsx";
import { Profile } from "./pages/Profile/Profile";
import { Landing } from "./pages/Landing/Landing.tsx";
import { PrivateRoute } from "./routes/PrivateRoute/PrivateRoute";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { CustomThemeProvider } from "./contexts/ThemeContext/ThemeContext";
import { UserContextProvider } from "./contexts/UserContext/UserContext";
import { GlobalStyles } from "@mui/material";
import { CSSTransition } from "react-transition-group";
import { Login } from "./pages/Login/Login";
import { Signup } from "./pages/Signup/Signup";
import "./App.css";
import "animate.css";

/* 
<Route path="/garden" element={Garden} />
<Route path="/chat" element={Chat} />
<Route path="/friends" element={Friends} />           
<Route path="/achievements" element={Achievements} />
<Route path="/account" element={Account} />
<Route path="/settings" element={Settings} /> 
*/

const routes = [
    { path: "/", name: "Landing", Component: Landing },
    //public routes go here
    { path: "/", name: "Landing", Component: PrivateRoute },
    //private routes go here
    { path: "/home", name: "Home", Component: Home },
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
                <Routes>
                   
                    <   Route
                            exact
                            path="/"
                            caseSensitive={false}
                            element={<Landing />}
                        />
        
                    <   Route
                            exact
                            path="/login"
                            caseSensitive={false}
                            element={<Login />}
                        />
                    <   Route
                            exact
                            path="/signup"
                            caseSensitive={false}
                            element={<Signup />}
                        />
                    <Route exact path="/" element={<PrivateRoute />}>
                        <Route
                            exact
                            path="/home"
                            caseSensitive={false}
                            element={<Home />}
                        />
                    </Route>
                    {/* <Route path="/" element={Home} />
                    <Route path="/garden" element={Garden} />
                    <Route path="/chat" element={Chat} />
                    <Route path="/friends" element={Friends} />           
                    <Route path="/achievements" element={Achievements} />
                    <Route path="/account" element={Account} />
                    <Route path="/settings" element={Settings} /> */}
                    <Route exact path="/" element={<PrivateRoute />}>
                        <Route
                            exact
                            path="/profile"
                            caseSensitive={false}
                            element={<Profile />}

                        />
                    </Route>
                </Routes>
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
                                classNames="screen"
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
