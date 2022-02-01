import * as React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import { KusaBox } from "../../components/Kusa/KusaBox/KusaBox";
import { LoginField } from "../../components/Login/LoginField/LoginField";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { LoginButton } from "../../components/Login/LoginButton/LoginButton";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../constants/backendURL";
import { setUserToken } from "../../contexts/UserContext/utils/useUserStorage";

import "./Signup.scss";

export const Signup: React.FC = () => {
    const { userId, isLoggedIn, setUserInfo } = React.useContext(UserContext);
    const [loading, setLoading] = React.useState(false);
    const [email, setEmail] = React.useState<string | undefined>(undefined);
    const [steamComplete, setSteamComplete] = React.useState(false);
    const [error, setError] = React.useState("");
    const navigate = useNavigate();

    const authenticateSteam = () => {
        if (!email) {
            setError("Enter an email address first.");
            return;
        }
        //this should definitely be replaced...with a token from the api
        const tokenResponse = "blah";
        setLoading(true);
        //TEMPORARILY redirect to steam - but we can't ensure the user actually logged in
        window.location.href = `${BACKEND_URL}/login`;
        //need a new endpoint to send over the email after, or find a way to insert into the pipeline later
        setSteamComplete(true);
        setUserToken(userId, tokenResponse);
        setUserInfo({ email, isLoggedIn: tokenResponse ? true : false });
        setLoading(false);
    };

    return (
        <Container>
            <KusaBox
                width="90%"
                styles={{
                    mx: "auto",
                    width: "90%",
                    padding: "2rem",
                    marginTop: "7rem",
                }}
            >
                <Grid container spacing={2}>
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
                        <LoginField required setState={setEmail}>
                            example@example.example
                        </LoginField>
                    </Grid>
                    <Grid
                        sx={{ p: 7, mx: "auto", width: "90%" }}
                        textAlign="center"
                    >
                        <Button
                            variant="contained"
                            sx={{
                                fontSize: "1.5rem",
                                backgroundColor: "#171a21",
                                color: "white",
                                textTransform: "none",
                            }}
                            onClick={
                                !steamComplete ? authenticateSteam : () => {}
                            }
                        >
                            {!steamComplete
                                ? "sign up with steam"
                                : "steam completed"}
                        </Button>
                    </Grid>
                    <Typography>{error}</Typography>
                </Grid>
            </KusaBox>

            <Grid
                sx={{ p: 3, width: "100%", marginLeft: "-.5rem" }}
                direction="row"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
            >
                <Grid item>
                    <LoginButton
                        onClick={() => navigate("/login")}
                        variant="contained"
                    >
                        or login
                    </LoginButton>
                </Grid>
            </Grid>
        </Container>
    );
};
