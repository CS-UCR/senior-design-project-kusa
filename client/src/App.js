import "./App.css";
import NavBar from "./components/KusaNavBar/NavBar";
import Home from "./pages/Home/Home";
import { Profile } from "./pages/Profile/Profile";
import { PrivateRoute } from "./routes/PrivateRoute/PrivateRoute";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CustomThemeProvider } from "./contexts/ThemeContext/ThemeContext";
import { UserContextProvider } from "./contexts/UserContext/UserContext";
import { GlobalStyles } from "@mui/material";
import { Login } from "./pages/Login/Login";
import { Signup } from "./pages/Signup/Signup";

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
                    <Route path="/" element={Home} />
                    {/* <Route path="/garden" element={Garden} />
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
                    <Route exact path="/" element={<PrivateRoute />}>
                        <Route
                            exact
                            path="/login"
                            caseSensitive={false}
                            element={<Login />}
                        />
                    </Route>
                    <Route exact path="/" element={<PrivateRoute />}>
                        <Route
                            exact
                            path="/signup"
                            caseSensitive={false}
                            element={<Signup />}
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

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export { ComposeApp as App };
