import * as React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import { KusaBox } from "../../components/Kusa/KusaBox/KusaBox";
import { LoginField } from "../../components/Login/LoginField/LoginField";
import { UserContext } from "../../contexts/UserContext/UserContext";
import "./Signup.scss";
import { LoginButton } from "../../components/Login/LoginButton/LoginButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signup: React.FC = () => {
    const { setUserInfo } = React.useContext(UserContext);
    const [loading, setLoading] = React.useState(false);
    const [steamComplete, setSteamComplete] = React.useState(false);
    const [error, setError] = React.useState("");
    const navigate = useNavigate();

    const sendSignUp = () => {};

    const authenticateSteam = () => {};

    return (
        <Container>
            <KusaBox
                height="400px"
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
                        <LoginField required>
                            example@example.example
                        </LoginField>
                    </Grid>
                    <Grid item>
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
                                ? "complete with steam"
                                : "steam completed"}
                        </Button>
                    </Grid>
                    <Grid
                        sx={{ p: 7, mx: "auto", width: "90%" }}
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        textAlign="center"
                    >
                        <Grid>
                            <LoginButton
                                variant="contained"
                                onClick={sendSignUp}
                            >
                                sign up
                            </LoginButton>
                        </Grid>
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
