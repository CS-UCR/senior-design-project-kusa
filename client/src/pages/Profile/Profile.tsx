import * as React from "react";
import { Box, Container, Grid } from "@mui/material";
import { KusaBox } from "../../components/KusaBox/KusaBox";
import { KusaHeader } from "../../components/KusaHeader/KusaHeader";
import { KusaButton } from "../../components/KusaButton/KusaButton";
import { default as linkSVG } from "../../assets/profile/link.svg";
import { default as suitcase } from "../../assets/profile/suitcase.svg";
import "./Profile.scss";

export const Profile: React.FC = () => {
    const iconHeight = 40;
    return (
        <Container>
            <KusaHeader styles={{ marginTop: "7rem" }}>
                <img
                    src={suitcase}
                    alt="suit"
                    width={iconHeight}
                    height={iconHeight}
                    style={{ marginRight: '1rem' }}
                />
                your information
            </KusaHeader>
            <KusaBox width="100%" height="10rem">
                <Grid container spacing={2}>
                    <Grid item xs={4}></Grid>
                </Grid>
            </KusaBox>
            <div className="inline"></div>
            <KusaHeader>
                <img
                    src={linkSVG}
                    alt="link"
                    width={iconHeight}
                    height={iconHeight}
                    style={{ marginRight: '1rem' }}
                />
                account links
            </KusaHeader>
            <KusaBox
                width="100%"
                height="15rem"
                styles={{ marginBottom: "4rem" }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={4}></Grid>
                </Grid>
            </KusaBox>
            <KusaHeader>
                <img
                    src={suitcase}
                    alt="suit"
                    width={iconHeight}
                    height={iconHeight}
                    style={{ marginRight: '1rem' }}
                />
                account options
            </KusaHeader>
            <Grid
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                textAlign="center"
            >
                <Grid item>
                    <KusaButton label="reset password" color="success" />
                </Grid>
                <Grid item marginTop={2}>
                    <KusaButton label="toggle emails" color="warning" />
                </Grid>
                <Grid item marginTop={2}>
                    <KusaButton label="deactivate" color="error" />
                </Grid>
            </Grid>
        </Container>
    );
};
