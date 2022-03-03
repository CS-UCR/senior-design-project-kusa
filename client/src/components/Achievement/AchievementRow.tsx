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
export const AchievementRow: React.FC<AchievementProps> = (props) => {
    const { id, progress } = props;
    const { title, description, image } = achievementData[id as string];

    // const imageWidth = 90;
    // const imageHeight = 90;
    const height = 90;
    const width = 90;
    const achievementWidth = 1000;

    return (
        <Grid container spacing={2}>
            <Grid item m={1} pt={2} xs={2} style={{ display: "flex", flexDirection: "column" }}>
                <KusaBox 
                    styles={{ padding: "2rem", paddingBottom: "3rem" }}
                    height={height}
                    width={width}
                >
                    <img
                        src={image}
                        alt={title}
                        width={width}
                        height={height}
                        style={{
                            alignContent: "center",
                            alignItems: "center",
                        }}
                    />   
                </KusaBox>
            </Grid>
            <Grid item m={1} xs={8}>
                <KusaBox
                    styles={{ padding: "2rem", paddingBottom: "3rem" }}
                    height={height}
                    width={achievementWidth}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={10}>    
                            <Typography display="inline" variant="h5" marginTop={1} color="#FDED5E" sx={{fontWeight: "bold"}}>
                                {title} 
                            </Typography>
                            <Typography display="inline" variant="h5" marginTop={1} color="#ECEFF4" >
                                {" - " + description} 
                            </Typography>
                        </Grid> 
                    </Grid>
                </KusaBox>
            </Grid>
        </Grid>
    );
};

            /* <Box
                width="80%"
                style={{
                    padding: "1rem",
                    backgroundColor: "none",
                    borderRadius: 0,
                }}
            >
                <KusaProgressBar completed={progress} />
            </Box> */