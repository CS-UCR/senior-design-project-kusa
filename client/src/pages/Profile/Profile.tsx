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
import { default as linkSVG } from "../../assets/profile/link.svg";
import { default as suitcase } from "../../assets/profile/suitcase.svg";
import { default as twitter } from "../../assets/socials/twitter.svg";
import { default as steam } from "../../assets/socials/steam.svg";
import { default as insta } from "../../assets/socials/insta.svg";
import { ProfileField } from "../../components/Profile/ProfileField/ProfileField";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { ProfileIcon } from "../../components/Profile/ProfileIcon/ProfileIcon";
import "./Profile.scss";

export const Profile: React.FC = () => {
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
            <KusaHeader styles={{ marginTop: "7rem" }}>
                <img
                    src={suitcase}
                    alt="suit"
                    width={iconHeight}
                    height={iconHeight}
                    style={{ marginRight: "1rem", marginBottom: "-0.5rem" }}
                />
                your information
            </KusaHeader>
            <KusaBox width="90%" styles={{ padding: "2rem" }}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Typography
                            variant="h5"
                            marginTop={1.5}
                            color="neutral.main"
                        >
                            username
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <ProfileField>{username}</ProfileField>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography
                            variant="h5"
                            marginTop={1.5}
                            color="neutral.main"
                        >
                            email
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <ProfileField>{email}</ProfileField>
                    </Grid>
                </Grid>
            </KusaBox>
            <KusaHeader>
                <img
                    src={linkSVG}
                    alt="link"
                    width={iconHeight}
                    height={iconHeight}
                    style={{ marginRight: "1rem", marginBottom: "-0.5rem" }}
                />
                account links
            </KusaHeader>
            <KusaBox
                width="90%"
                styles={{ marginBottom: "5rem", padding: "2rem" }}
            >
                <Grid container spacing={2}>
                    {steam && (
                        <>
                            <Grid item xs={4}>
                                <ProfileIcon svg={steam} />
                            </Grid>
                            <Grid item xs={8}>
                                <ProfileField>{steamname}</ProfileField>
                            </Grid>
                        </>
                    )}
                    {connections.map((connection) => {
                        if (connection.title === "twitter") {
                            return (
                                <>
                                    <Grid item xs={4}>
                                        <ProfileIcon svg={twitter} />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <ProfileField>
                                            {connection.name}
                                        </ProfileField>
                                    </Grid>
                                </>
                            );
                        } else if (connection.title === "insta") {
                            return (
                                <>
                                    <Grid item xs={4}>
                                        <ProfileIcon svg={insta} />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <ProfileField>
                                            {connection.name}
                                        </ProfileField>
                                    </Grid>
                                </>
                            );
                        } else {
                            return <></>;
                        }
                    })}
                </Grid>
            </KusaBox>
            <KusaHeader>
                <img
                    src={suitcase}
                    alt="suit"
                    width={iconHeight}
                    height={iconHeight}
                    style={{ marginRight: "1rem", marginBottom: "-0.5rem" }}
                />
                account options
            </KusaHeader>
            <Grid
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                textAlign="center"
            >
                <Grid item>
                    <KusaButton
                        label="reset password"
                        color="success"
                        onClick={getPasswordReset}
                    />
                </Grid>
                <Grid item marginTop={2}>
                    <KusaButton
                        label="toggle emails"
                        color="warning"
                        onClick={getEmailToggle}
                    />
                </Grid>
                <Grid item marginTop={2}>
                    <KusaButton
                        label="deactivate"
                        color="error"
                        onClick={getDeactivate}
                    />
                </Grid>
            </Grid>
            <Box
                className="popin"
                sx={{
                    marginY: "2rem",
                    boxShadow: 4,
                }}
            >
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
