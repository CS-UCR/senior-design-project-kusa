import * as React from "react";
import { Container, Grid } from "@mui/material";
import { KusaBox } from "../../components/templates/KusaBox/KusaBox";

export const Profile: React.FC = () => {
    return (
        <Container>
            <KusaBox height={100} width={200}>
                <Grid container spacing={1}>
                    <h1>yo</h1>
                </Grid>
            </KusaBox>
        </Container>
    );
};
