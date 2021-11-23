import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { UserContext } from "../UserContext/UserContext";
import { yellow } from "@mui/material/colors";

declare module "@mui/material/styles" {
    interface Theme {
        status: {
            danger: string;
        };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        status?: {
            danger?: string;
        };
    }
}

const crossTheme = {
    success: {
        main: yellow,
    },
    text: {
        almond: "#F9FBE8",
        yellow: "#FDED5E",
        green: "#1E4418",
        blue: "#88C0D0",
        gray: "#444444",
    },
    garden: {
        gradient: "linear-gradient(#7FECF3, #6FC08A,#266907)",
    },
};

const darkTheme = createTheme({
    palette: {
        //greys for backgrounds
        primary: {
            main: "#444746",
            dark: "#151615",
            contrastText: "#ECEFF4",
            //gradient is stored under light
            light: "linear-gradient(#444746,#151615)",
        },
        //greys for boxes
        secondary: {
            main: "rgba(112, 125, 124, 0.38)",
            contrastText: "#ECEFF4",
        },
    },
}, crossTheme);

const lightTheme = createTheme({
    palette: {
        //light green for backgrounds
        primary: {
            main: "#A4E762",
            dark: "#355A24",
            //gradient is stored under light
            light: "linear-gradient(to bottom, #A4E762, #355A24)",
            contrastText: "#000",
        },
        //light browns for boxes
        secondary: {
            main: "rgba(224, 171, 108, 0.8)",
            light: "#EBCB8B",
            dark: "#ECEFF4",
            contrastText: "#F9FBE8",
        },
    },
}, crossTheme);

export const CustomThemeProvider = (props: any) => {
    const theme = React.useContext(UserContext).darkMode
        ? darkTheme
        : lightTheme;
    return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};
