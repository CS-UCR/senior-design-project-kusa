import { Switch } from "@mui/material";
import React from "react";
import { UserContext } from "../../../../contexts/UserContext/UserContext";

export const DarkToggle: React.FC = () => {
    const {darkMode, setDarkMode} = React.useContext(UserContext);
    return <Switch color="default" defaultChecked={!darkMode} onChange={() => setDarkMode(!darkMode)}/>
};
