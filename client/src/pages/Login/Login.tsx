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
import { ProfileField } from "../../components/Profile/ProfileField/ProfileField";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { ProfileIcon } from "../../components/Profile/ProfileIcon/ProfileIcon";
import "./Login.scss";
import {LoginButton} from "../../components/Login/LoginButton";

export const Login: React.FC = () => {
    const {email,username } =
        React.useContext(UserContext);

    const login = () => {
    };
    return (
        <Container >
            <KusaBox height="300px" width="90%" styles={{ mx: "auto", width: "90%" ,padding: "2rem", marginTop: "7rem"}}>
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
                        <ProfileField>{email}</ProfileField>
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
                        <ProfileField>{username}</ProfileField>
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
                                        onClick={login}
                            >
                                login
                             </LoginButton>
                        </Grid>
                    </Grid>
                </Grid>
                
            </KusaBox>
            
            <Grid
                sx={{ p:3,mx: "auto", width: "90%"  }}
                direction="row"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                >
                <Grid item>
                    <LoginButton  onClick={event =>  window.location.href='/signup'} variant="contained"
                                >
                        or sign up 
                    </LoginButton>
                </Grid>
            </Grid>

        </Container>
    );
};
