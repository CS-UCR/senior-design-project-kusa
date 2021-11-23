import { createTheme, ThemeProvider } from "@mui/system";
import * as React from "react";
import { UserContext } from "../UserContext/UserContext";

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

/*
:root {
  --lightModeBG: linear-gradient(#A4E762,#355A24);
  --darkModeBG: linear-gradient(#444746,#151615);
  --gardenBG: linear-gradient(#7FECF3, #6FC08A,#266907);
  --brownBox: rgba(224, 171, 108, 0.8);
  --lightBrownBox: #EBCB8B;
  --grayBox: rgba(112, 125, 124, 0.38);
  --lightModeTextBubble: #ECEFF4;
  --textAlmond: #F9FBE8;
  --textGreen: #1E4418;
  --textGray: #444444;
  --textYellow: #FDED5E;
  --textWhite: #ECEFF4;
  --textBlue: #88C0D0;
  }
  
*/
const darkTheme = createTheme({
    palette: {
        //greys for backgrounds
        primary: {
            main: "#444746",
            dark: "#151615",
            gradient: "linear-gradient(#444746,#151615)",
            contrastText: "#ECEFF4",
        },
        //greys for boxes
        secondary: {
            main: "rgba(112, 125, 124, 0.38)",
            contrastText: "#ECEFF4",
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
    },
});

const lightTheme = createTheme({
    palette: {
        //greens for backgrounds
        primary: {
            main: "#A4E762",
            dark: "#355A24",
            gradient: "linear-gradient(#A4E762,#355A24)",
            contrastText: "#ECEFF4",
        },
        //browns for boxes
        secondary: {
            main: "rgba(224, 171, 108, 0.8)",
            light: "#EBCB8B",
            textBubble: "#ECEFF4",
            contrastText: "#1E4418",
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
    },
});

export const CustomThemeProvider = (
    children: React.ReactChild | React.ReactChild[]
) => {
    const theme = React.useContext(UserContext).darkMode;
    return (
        <ThemeProvider theme={theme ? darkTheme : lightTheme}>
            {children}
        </ThemeProvider>
    );
};
