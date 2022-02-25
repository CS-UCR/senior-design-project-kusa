import * as React from "react";
import axios from "axios";
import { Container, Grid, Typography } from "@mui/material";
import { KusaBox } from "../../components/Kusa/KusaBox/KusaBox";
import { LoginField } from "../../components/Login/LoginField/LoginField";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { LoginButton } from "../../components/Login/LoginButton/LoginButton";
import { KusaLoadingSpinner } from "../../components/Kusa/KusaSpinner/KusaLoadingSpinner";
import { BACKEND_URL } from "../../constants/backendURL";
import { KusaHeader } from "../../components/Kusa/KusaHeader/KusaHeader";
import { headers } from "../../constants/headers";
import { getToken } from "../../contexts/UserContext/utils/useUserCookies";

export const Signup: React.FC = () => {
    const { userId, setUserInfo } = React.useContext(UserContext);
    const [loading, setLoading] = React.useState(false);
    const [email, setEmail] = React.useState<string | undefined>(undefined);
    const [error, setError] = React.useState("");
    const authAxios = axios.create({
        headers: {
            ...headers,
            Authorization: `Bearer ${getToken()}`
        }
    })
    const sendSignUp = () => {
        if (!email) {
            setError("Enter an email address first.");
            return;
        }
        let tokenResponse = getToken();
        setLoading(true);
        authAxios
            .post(`${BACKEND_URL}/addEmail/`, {
                userId: userId,
                email: email,
            })
            .then(() => {
                setUserInfo({ isLoggedIn: true, email });
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setError("An error occurred. Please try again later.");
                setLoading(false);
            });
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
