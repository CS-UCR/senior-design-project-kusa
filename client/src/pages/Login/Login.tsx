import * as React from "react";
import { Container, Grid, Button } from "@mui/material";
import { KusaBox } from "../../components/Kusa/KusaBox/KusaBox";
import { UserContext } from "../../contexts/UserContext/UserContext";
import "./Login.scss";
import { LoginButton } from "../../components/Login/LoginButton/LoginButton";
import { useNavigate } from "react-router-dom";
import { KusaLoadingSpinner } from "../../components/Kusa/KusaSpinner/KusaLoadingSpinner";
import { BACKEND_URL } from "../../constants/backendURL";

export const Login: React.FC = () => {
    const [loading, setLoading] = React.useState(false);
    const {setUserInfo} = React.useContext(UserContext);
    const [steamComplete, setSteamComplete] = React.useState(false);
    const navigate = useNavigate();

    const authenticateSteam = () => {
        setLoading(true);
        window.location.href = `${BACKEND_URL}/login`;
        setUserInfo({isLoggedIn: true,})
        setSteamComplete(true);
        setLoading(false);
    };

    return (
        <Container>
            <KusaBox
                width="80%"
                styles={{
                    mx: "auto",
                    width: "80%",
                    padding: "2rem",
                    marginTop: "7rem",
                }}
            >
                <Grid container spacing={2}>
                    <Grid></Grid>
                    <Grid sx={{ p: 7, mx: "auto" }} textAlign="center">
                        <Grid>
                            <Button
                                variant="contained"
                                sx={{
                                    fontSize: "1.5rem",
                                    backgroundColor: "#171a21",
                                    color: "white",
                                    textTransform: "none",
                                }}
                                onClick={
                                    !steamComplete
                                        ? authenticateSteam
                                        : () => {}
                                }
                            >
                                {!steamComplete
                                    ? "login with steam"
                                    : "steam login completed"}
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </KusaBox>
            <Grid
                sx={{ p: 3, mx: "auto", marginLeft: "-.5rem" }}
                direction="row"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
            >
                <Grid item>
                    <LoginButton
                        onClick={() => navigate("/signup")}
                        variant="contained"
                    >
                        or sign up
                    </LoginButton>
                </Grid>
            </Grid>
            <KusaLoadingSpinner loading={loading} />
        </Container>
    );
};
