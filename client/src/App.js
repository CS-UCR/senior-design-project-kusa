import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { Profile } from "./pages/Profile/Profile";
import { PrivateRoute } from "./routes/PrivateRoute/PrivateRoute";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CustomThemeProvider } from "./contexts/ThemeContext/ThemeContext";
import { UserContextProvider } from "./contexts/UserContext/UserContext";
import { GlobalStyles } from "@mui/material";

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
                    <Route exact path="/" element={<Home />} />
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

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export { ComposeApp as App };
