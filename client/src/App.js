import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { Profile } from "./pages/Profile/Profile";
import { PrivateRoute } from "./routes/PrivateRoute/PrivateRoute";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CustomThemeProvider } from "./contexts/ThemeContext/ThemeContext";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <CustomThemeProvider>
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
                </CustomThemeProvider>
            </BrowserRouter>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;
