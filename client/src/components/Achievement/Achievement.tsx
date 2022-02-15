import { Box, Grid, Typography } from "@mui/material";
import * as React from "react";
import { KusaBox } from "../Kusa/KusaBox/KusaBox";
import KusaProgressBar from "../Kusa/KusaProgressBar/KusaProgressBar";
import { achievementData } from "./utils/achievementData";

interface AchievementProps {
    id: string;
    progress?: number;
}

//replace colors with a context color when we have time
export const Achievement: React.FC<AchievementProps> = (props) => {
    const { id, progress } = props;
    const { title, description, image } = achievementData[id as string];

    const imageWidth = 190;
    const imageHeight = 190;
    const height = 280;

    return (
        <Grid item xs={4} style={{ display: "flex", flexDirection: "column" }}>
            <KusaBox
                styles={{ padding: "2rem", paddingBottom: "3rem" }}
                height={height}
            >
                <Grid
                    container
                    sx={{
                        alignContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        flexWrap: "nowrap",
                    }}
                >
                    <Grid item xs={10}>
                        <img
                            src={image}
                            alt={title}
                            width={imageWidth}
                            height={imageHeight}
                            style={{
                                alignContent: "center",
                                alignItems: "center",
                            }}
                        />
                    </Grid>
                    <Grid item xs={10}>
                        <Typography variant="h5" marginTop={1} color="#F9FBE8" sx={{fontWeight: "bold"}}>
                            {title}
                        </Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <Typography
                            marginTop={1}
                            marginLeft={-2}
                            marginRight={-2}
                            textAlign="center"
                            color="#F9FBE8"
                        >
                            {description}
                        </Typography>
                    </Grid>
                </Grid>
            </KusaBox>
            <Box
                width="80%"
                style={{
                    padding: "1rem",
                    backgroundColor: "none",
                    borderRadius: 0,
                }}
            >
                <KusaProgressBar completed={progress} />
            </Box>
        </Grid>
    );
};
