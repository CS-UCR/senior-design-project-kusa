import * as React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import { KusaBox } from "../../components/Kusa/KusaBox/KusaBox";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../constants/backendURL";
import { KusaHeader } from "../../components/Kusa/KusaHeader/KusaHeader";

export const SteamAuth: React.FC = () => {
    const { userId, email } = React.useContext(UserContext);
    const navigate = useNavigate();

    if (userId && email) {
        navigate("/login");
    }
    if (userId) {
        navigate("/signup");
    }

    return (
        <Container>
            <KusaHeader>connect your steam account:</KusaHeader>
            <KusaBox
                width="90%"
                styles={{
                    mx: "auto",
                    width: "90%",
                    padding: "2rem",
                    marginTop: "1rem",
                }}
            >
                <>
                    <Grid
                        sx={{
                            paddingX: 7,
                            paddingY: 2,
                            mx: "auto",
                            width: "90%",
                        }}
                        textAlign="center"
                    >
                        <a href={`${BACKEND_URL}/login`}>
                            <Button
                                variant="contained"
                                sx={{
                                    fontSize: "1.5rem",
                                    backgroundColor: "#171a21",
                                    color: "white",
                                    textTransform: "none",
                                }}
                            >
                                connect with steam
                            </Button>
                        </a>
                    </Grid>
                </>
            </KusaBox>
        </Container>
    );
};
