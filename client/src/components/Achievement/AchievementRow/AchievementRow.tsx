import { Box, Grid, Typography } from "@mui/material";
import * as React from "react";
import { KusaBox } from "../../Kusa/KusaBox/KusaBox";
import KusaProgressBar from "../../Kusa/KusaProgressBar/KusaProgressBar";
import { achievementData } from "../utils/achievementData";
import "./AchievementRow.css";

interface AchievementProps {
    id?: string;
    progress?: number;
    date_achieved?: string;
}


export const AchievementRow: React.FC<AchievementProps> = (props) => {
    const { id, progress, date_achieved } = props;
    const { title, description, image } = achievementData[id as string];


    const height = 90;
    const width = 90;
    const achievementWidth = 1000;
    return (
        <Grid container spacing={2}>
            <Grid item m={1} pt={2} xs={2} >
                <KusaBox 
                    styles={{ padding: "2rem", paddingBottom: "3rem" }}
                    height={height}
                    width={width}
                >
                    <div className="achievement-icon-tabler">
                        {image}
                    </div>
                </KusaBox>
            </Grid>
            <Grid item m={1} xs={8}>
                <KusaBox
                    styles={{ padding: "2rem", paddingBottom: "3rem" }}
                    height={height}
                    width={achievementWidth}
                >
                    <Grid container>
                        <Typography display="inline" variant="h5" marginTop={1} color="#FDED5E" sx={{fontWeight: "bold"}}>
                            {title} 
                        </Typography>
                        <Typography display="inline" variant="h5" marginTop={1} color="#ECEFF4" >
                            {" - " + description} 
                        </Typography>
                        <Box
                            width="100%"
                            style={{
                                padding: "1rem",
                                backgroundColor: "none",
                                borderRadius: 0,
                            }}
                        >
                            <KusaProgressBar completed={progress} />
                            {date_achieved !== "" &&
                                <Typography align="right" variant="h6" marginTop={1} color="#ECEFF4" >
                                    {"unlocked on " + date_achieved} 
                                </Typography>
                            }
                        </Box>
                    </Grid>
                </KusaBox>
            </Grid>
        </Grid>
    );
};
