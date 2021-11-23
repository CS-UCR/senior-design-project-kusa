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
        action: {
            active: "rgba(0, 0, 0, 0.54)",
            hover: "rgba(0, 0, 0, 0.04)",
            hoverOpacity: 0.04,
            selected: "rgba(0, 0, 0, 0.08)",
            selectedOpacity: 0.08,
            disabled: "rgba(0, 0, 0, 0.26)",
            disabledBackground: "rgba(0, 0, 0, 0.12)",
            disabledOpacity: 0.38,
            focus: "rgba(0, 0, 0, 0.12)",
            focusOpacity: 0.12,
            activatedOpacity: 0.12,
        },
        common: {
            black: "#000",
            white: "#ECEFF4",
        },
        grey: {
            50: "#fafafa",
            100: "#f5f5f5",
            200: "#eeeeee",
            300: "#e0e0e0",
            400: "#bdbdbd",
            500: "#9e9e9e",
            600: "#757575",
            700: "#616161",
            800: "#424242",
            900: "#212121",
            A100: "#f5f5f5",
            A200: "#eeeeee",
            A400: "#bdbdbd",
            A700: "#616161",
        },
        //greys for backgrounds
        primary: {
            main: "#444746",
            dark: "#151615",
            contrastText: "#ECEFF4",
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
        grey: {
            50: "#fafafa",
            100: "#f5f5f5",
            200: "#eeeeee",
            300: "#e0e0e0",
            400: "#bdbdbd",
            500: "#9e9e9e",
            600: "#757575",
            700: "#616161",
            800: "#424242",
            900: "#212121",
            A100: "#f5f5f5",
            A200: "#eeeeee",
            A400: "#bdbdbd",
            A700: "#616161",
        },
        common: {
            black: "#000",
            white: "#ECEFF4",
        },
        action: {
            active: "rgba(0, 0, 0, 0.54)",
            hover: "rgba(0, 0, 0, 0.04)",
            hoverOpacity: 0.04,
            selected: "rgba(0, 0, 0, 0.08)",
            selectedOpacity: 0.08,
            disabled: "rgba(0, 0, 0, 0.26)",
            disabledBackground: "rgba(0, 0, 0, 0.12)",
            disabledOpacity: 0.38,
            focus: "rgba(0, 0, 0, 0.12)",
            focusOpacity: 0.12,
            activatedOpacity: 0.12,
        },
        //light green for backgrounds
        primary: {
            main: "#A4E762",
            dark: "#355A24",
            light: "linear-gradient(to bottom, #A4E762, #355A24)",
            contrastText: "#ECEFF4",
        },
        //light grays for boxes
        secondary: {
            main: "rgba(224, 171, 108, 0.8)",
            light: "#EBCB8B",
            dark: "#ECEFF4",
            contrastText: "#1E4418",
        },
    },
}, crossTheme);

export const CustomThemeProvider = (props: any) => {
    const theme = React.useContext(UserContext).darkMode
        ? darkTheme
        : lightTheme;
    return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};
