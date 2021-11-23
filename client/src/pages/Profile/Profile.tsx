import * as React from "react";
import { Container, Grid } from "@mui/material";
import { KusaBox } from "../../components/KusaBox/KusaBox";
import { KusaHeader } from "../../components/KusaHeader/KusaHeader";
import { KusaButton } from "../../components/KusaButton/KusaButton";

export const Profile: React.FC = () => {
    return (
        <Container sx={{ textAlign: "left" }}>
            <KusaHeader styles={{ marginTop: "7rem" }}>
                your information
            </KusaHeader>
            <KusaBox width="100%" height="10rem">
                <Grid container spacing={2}>
                    <Grid item xs={4}></Grid>
                </Grid>
            </KusaBox>
            <KusaHeader>account links</KusaHeader>
            <KusaBox width="100%" height="15rem">
                <Grid container spacing={2}>
                    <Grid item xs={4}></Grid>
                </Grid>
            </KusaBox>
            <KusaHeader>account options</KusaHeader>
            <Grid
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                <Grid item>
                    <KusaButton label="reset password" />
                </Grid>
                <Grid item>
                    <KusaButton label="toggle emails" />
                </Grid>
                <Grid item>
                    <KusaButton label="deactivate" />
                </Grid>
            </Grid>
        </Container>
    );
};
