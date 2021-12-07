import * as React from "react";
import {
    Container,
    Grid,
    Typography,
} from "@mui/material";
import { KusaBox } from "../../components/Kusa/KusaBox/KusaBox";
import { LoginField } from "../../components/Login/LoginField/LoginField";
import { UserContext } from "../../contexts/UserContext/UserContext";
import "./Signup.scss";
import {LoginButton} from "../../components/Login/LoginButton/LoginButton";
import { useState } from "react";

export const Signup: React.FC = () => {
    const {email,username } =
        React.useContext(UserContext);
    const [password, setPassword] = useState("");
    const [reenterPassword, setreenterPassword] = useState("");

    const signUp = () => {
    };
    return (
        <Container >
            <KusaBox height="400px" width="90%" styles={{ mx: "auto", width: "90%", padding: "2rem", marginTop: "7rem"}}>
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
                        <LoginField>{email}</LoginField>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography
                            variant="h5"
                            marginTop={1.5}
                            color="neutral.main"
                        >
                            password
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <LoginField>{password}</LoginField>
                    </Grid >
                    <Grid item xs={4}>
                        <Typography
                            variant="h5"
                            marginTop={1.5}
                            color="neutral.main"
                        >
                            re-enter password
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <LoginField>{reenterPassword}</LoginField>
                    </Grid >
                    <Grid
                        sx={{ p:7,mx: "auto", width: "90%" }}
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        textAlign="center"
                    >
                        <Grid>
                            <LoginButton variant="contained"
                                        onClick={signUp}
                            >
                                sign up 
                             </LoginButton>
                        </Grid>
                    </Grid>
                </Grid>

            </KusaBox>

            <Grid
                sx={{ p:3, width: "100%", marginLeft: "-.5rem" }}
                direction="row"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                >
                <Grid item>
                    <LoginButton 
                    onClick={event =>  window.location.href='/login'}
                    variant="contained"
                    >
                        or login
                    </LoginButton>
                </Grid>
            </Grid>

        </Container>
    );
};
