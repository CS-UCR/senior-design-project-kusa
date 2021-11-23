import * as React from "react";
import { Container, Box, Grid } from "@mui/material";
import { KusaBox } from "../../components/KusaBox/KusaBox";

export const Profile: React.FC = () => {
    return (
        <Container>
            <h1 className="section-header"> your information </h1>
            <KusaBox width="90%" height="50%">
                <Grid container spacing={1}>
                    <h1>yo</h1>
                </Grid>
            </KusaBox>
        </Container>
    );
};
