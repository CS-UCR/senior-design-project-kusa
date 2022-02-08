import * as React from "react";
import axios from "axios";
import { Container, Grid, Typography } from "@mui/material";
import { KusaBox } from "../../components/Kusa/KusaBox/KusaBox";
import { LoginField } from "../../components/Login/LoginField/LoginField";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { LoginButton } from "../../components/Login/LoginButton/LoginButton";
import { setUserToken } from "../../contexts/UserContext/utils/useUserStorage";
import { KusaLoadingSpinner } from "../../components/Kusa/KusaSpinner/KusaLoadingSpinner";
import { BACKEND_URL } from "../../constants/backendURL";

import "./Signup.scss";
import { KusaHeader } from "../../components/Kusa/KusaHeader/KusaHeader";

export const Signup: React.FC = () => {
    const { userId, setUserInfo } = React.useContext(UserContext);
    const [loading, setLoading] = React.useState(false);
    const [email, setEmail] = React.useState<string | undefined>(undefined);
    const [error, setError] = React.useState("");

    const sendSignUp = () => {
        if (!email) {
            setError("Enter an email address first.");
            return;
        }
        let tokenResponse;
        setLoading(true);
        axios
            .get(`${BACKEND_URL}/getToken/`)
            .then((response) => {
                let result = JSON.parse(response.data);
                tokenResponse = result.access_token;
                setUserToken(userId, tokenResponse);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setError("An error occurred. Please try again later.");
                setLoading(false);
            });
        //need a new endpoint to send over the email after, or find a way to insert into the pipeline later
        setUserInfo({ email, isLoggedIn: tokenResponse ? true : false });
    };

    return (
        <Container>
            <>
                <KusaHeader>
                    now, complete your account with an email address:
                </KusaHeader>
                <KusaBox
                    width="90%"
                    styles={{
                        mx: "auto",
                        width: "90%",
                        padding: "2rem",
                        marginTop: "1rem",
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
                            sx={{ mx: "auto", width: "90%", marginTop: "2rem" }}
                            textAlign="center"
                        >
                            <Typography>{error}</Typography>
                        </Grid>
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
                            onClick={() => sendSignUp()}
                            variant="contained"
                        >
                            signup
                        </LoginButton>
                    </Grid>
                </Grid>
                <KusaLoadingSpinner loading={loading} />
            </>
        </Container>
    );
};
