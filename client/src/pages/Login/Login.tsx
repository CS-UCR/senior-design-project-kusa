import * as React from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
} from "@mui/material";
import { KusaBox } from "../../components/Kusa/KusaBox/KusaBox";
import { UserContext } from "../../contexts/UserContext/UserContext";
import "./Login.scss";
import {LoginButton} from "../../components/Login/LoginButton/LoginButton";
import { useState } from "react";
import { LoginField } from "../../components/Login/LoginField/LoginField";


export const Login: React.FC = () => {
    const {email,username } =
        React.useContext(UserContext);
    const [password, setPassword] = useState("");
    // send email/password to the server to verify 
    const login = () => {

    };
    return (
        <Container >
            <KusaBox height="300px" width="80%" styles={{ mx: "auto", width: "80%" ,padding: "2rem", marginTop: "7rem"}}>
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
                        <LoginField> {password}</LoginField>
                    </Grid >
                    <Grid
                        sx={{ p:7, mx: "auto"}}
                        // direction="row"
                        // justifyContent="center"
                        // alignItems="center"
                        textAlign="center"
                    >
                        <Grid>
                            <LoginButton variant="contained" onClick={login}>
                                login
                             </LoginButton>
                        </Grid>
                    </Grid>
                </Grid>

            </KusaBox>
            <Grid
                sx={{ p:3, mx: "auto", marginLeft: "-.5rem"}}
                direction="row"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                >
                <Grid item>
                    <LoginButton  onClick={event =>  window.location.href='/signup'} variant="contained">
                            or sign up 
                    </LoginButton>
                </Grid>
            </Grid>

        </Container>
    );
};