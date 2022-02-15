import { Grid, Typography } from "@mui/material";
import * as React from "react";
import { KusaBox } from "../Kusa/KusaBox/KusaBox";
import { achievementData } from "./utils/achievementData";

interface AchievementProps {
    id: string;
    progress?: number;
}

export const Achievement: React.FC<AchievementProps> = (props) => {
    const { id, progress } = props;
    const { title, description, image } = achievementData[id as string];
    const imageWidth = 190;
    const imageHeight = 190;
    return (
            <KusaBox width="25%" styles={{ padding: "1rem" }}>
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
                        <Typography variant="h6" marginTop={1} color="#F9FBE8">
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
    );
};
