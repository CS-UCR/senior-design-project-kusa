import * as React from "react";
import { Box, Container, Grid } from "@mui/material";
import { KusaHeader } from "../../components/Kusa/KusaHeader/KusaHeader";
import { Bubbles } from "../../components/Bubbles/Bubbles";
import { LandingButton } from "../../components/Landing/LandingButton/LandingButton";

export const Landing: React.FC = () => {
    return (
        <Container
            sx={{ display: "grid", height: "80%", alignItems: "center" }}
        >
            <Grid
                textAlign="center"
            >
                <Grid item>
                    <KusaHeader styles={{ fontSize: 140 }}>kusa.</KusaHeader>
                    <KusaHeader
                        color="#FDED5E"
                        styles={{ marginTop: "1rem", fontSize: 85 }}
                    >
                        let's get on track.
                    </KusaHeader>
                    <LandingButton
                        onClick={() => (window.location.href = "/signup")}
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
