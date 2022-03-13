import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { UserContext } from "../UserContext/UserContext";
import { yellow } from "@mui/material/colors";

declare module "@mui/material/styles" {
    interface Palette {
        neutral: Palette["primary"];
    }
    interface PaletteOptions {
        neutral: PaletteOptions["primary"];
    }

    interface PaletteColor {
        darker?: string;
    }
    interface SimplePaletteColorOptions {
        darker?: string;
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

const darkTheme = createTheme(
    {
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
            neutral: {
                main: "#ffff",
                dark: "#1E4418",
            },
        },
    },
    crossTheme
);

const lightTheme = createTheme(
    {
        palette: {
            //light green for backgrounds
            primary: {
                main: "#1a6c0d",
                dark: "#355A24",
                //gradient is stored under light
                light: "linear-gradient(to bottom, #A4E762, #355A24)",
                contrastText: "#F9FBE8",
            },
            //light browns for boxes
            secondary: {
                main: "rgba(224, 171, 108, 0.8)",
                light: "#007500",
                dark: "#ECEFF4",
                contrastText: "#F9FBE8",
            },
            //dark greens
            neutral: {
                main: "#1E4418",
                dark: "#1E4418",
            },
            success: {
                main: "#7FECF3",
            },
            warning: {
                main: "#FFE600",
            },
            error: {
                main: "#ECA780",
            },
        },
    },
    crossTheme
);

export const CustomThemeProvider = (props: any) => {
    const theme = React.useContext(UserContext).darkMode;
    return (
        <ThemeProvider theme={theme ? darkTheme : lightTheme}>
            {props.children}
        </ThemeProvider>
    );
};
