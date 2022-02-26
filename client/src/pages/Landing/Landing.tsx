import * as React from "react";
import { Container, Grid } from "@mui/material";
import { Bubbles } from "../../components/Bubbles/Bubbles";
import { LandingButton } from "../../components/Landing/LandingButton/LandingButton";
import { KusaHeader } from "../../components/Kusa/KusaHeader/KusaHeader";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { useNavigate } from "react-router-dom";

export const Landing: React.FC = () => {
    const { isLoggedIn } = React.useContext(UserContext);
    const navigate = useNavigate();
    return (
        <Container
            sx={{ display: "grid", height: "68%", alignItems: "center" }}
        >
            <Grid textAlign="center">
                <Grid item>
                    <KusaHeader styles={{ fontSize: 140, fontWeight: 600 }}>
                        kusa.
                    </KusaHeader>

                    <KusaHeader
                        color="#FDED5E"
                        styles={{
                            marginTop: "1rem",
                            fontSize: 85,
                            fontWeight: 500,
                        }}
                    >
                        let's get on track.
                    </KusaHeader>

                    <LandingButton
                        onClick={() =>
                            isLoggedIn
                                ? navigate("/home")
                                : navigate("/steamauth")
                        }
                        variant="contained"
                    >
                        play
                    </LandingButton>
                </Grid>
            </Grid>
            <Bubbles />
        </Container>
    );
};
