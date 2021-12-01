import * as React from "react";
import {
    Alert,
    AlertColor,
    Box,
    Button,
    Container,
    Grid,
    Typography,
} from "@mui/material";
import { KusaBox } from "../../components/Kusa/KusaBox/KusaBox";
import { KusaHeader } from "../../components/Kusa/KusaHeader/KusaHeader";
import { KusaButton } from "../../components/Kusa/KusaButton/KusaButton";
import { default as chartbar } from "../../assets/home/chart-bar.svg";
import { default as trophy } from "../../assets/home/trophy.svg";
import { default as twitter } from "../../assets/socials/twitter.svg";
import { default as steam } from "../../assets/socials/steam.svg";
import { default as insta } from "../../assets/socials/insta.svg";
import { ProfileField } from "../../components/Profile/ProfileField/ProfileField";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { ProfileIcon } from "../../components/Profile/ProfileIcon/ProfileIcon";
import { Bubbles } from "../../components/Bubbles/Bubbles";

export const Landing: React.FC = () => {
    const { username, email, steamname, connections } =
        React.useContext(UserContext);
    const [status, setStatus] = React.useState<AlertColor | null>(null);
    const [loading, setLoading] = React.useState<boolean>(false);
    const [operation, setOperation] = React.useState<string>("");
    const iconHeight = 40;

    //implement with backend, sends requests to endpoints per action
    const getPasswordReset = () => {
        setLoading(true);
        let response = "200";
        if (response[0] && response[0] === "2") {
            setStatus("success");
            setOperation(
                "Check your email to continue resetting your password."
            );
        }
        setLoading(false);
    };
    const getDeactivate = () => {
        setLoading(true);
        let response = "200";
        if (response[0] && response[0] === "2") {
            setStatus("success");
            setOperation("Check your email to confirm deactivation.");
        }
        setLoading(false);
    };
    const getEmailToggle = () => {
        setLoading(true);
        let response = "200";
        if (response[0] && response[0] === "2") {
            setStatus("success");
            setOperation("Email notifications have been removed.");
        } else {
            setOperation("An error occurred");
        }
        setLoading(false);
    };

    return (
        <Container>
            <Box
                className="popin"
                sx={{
                    marginY: "2rem",
                    boxShadow: 4,
                }}
            >
                <Bubbles />
                {!loading && status && (
                    <Alert
                        severity={status}
                        color="success"
                        action={
                            <Button
                                color="inherit"
                                size="small"
                                onClick={() => setStatus(null)}
                            >
                                X
                            </Button>
                        }
                    >
                        {operation}
                    </Alert>
                )}
            </Box>
        </Container>
    );
};

