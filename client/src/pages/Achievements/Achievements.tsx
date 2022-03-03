import * as React from "react";
import {
    Box,
    Container,
    Grid,
    MenuItem,
    Select,
    Typography,
} from "@mui/material";
import { KusaBox } from "../../components/Kusa/KusaBox/KusaBox";
import { KusaHeader } from "../../components/Kusa/KusaHeader/KusaHeader";
import { default as chartbar } from "../../assets/home/chart-bar.svg";
import { default as trophy } from "../../assets/home/trophy.svg";
import { AchieveContext } from "../../contexts/AchieveContext/AchieveContext";
import { AchievementRow } from "../../components/Achievement/AchievementRow";
import { ResponsiveLine, Serie } from "@nivo/line";
import { KusaLoadingSpinner } from "../../components/Kusa/KusaSpinner/KusaLoadingSpinner";

const theme = {
    axis: {
        fontSize: "20px",
        ticks: {
            text: {
                fill: "#ffffff",
            },
        },
        legend: {
            text: {
                fill: "#aaaaaa",
            },
        },
    },
};

export const Achievements: React.FC = () => {
    const { achievements } = React.useContext(AchieveContext);
    const [loading, setLoading] = React.useState(false);
    const iconHeight = 40;


    return (
        <Container>
            <KusaHeader styles={{ marginTop: "5rem" }}>
            <img
                src={trophy}
                alt="trophy"
                width={iconHeight}
                height={iconHeight}
                style={{ marginRight: "1rem", marginBottom: "-0.5rem" }}
            />
            achievements
            </KusaHeader> 
            {/* <Grid container spacing={5}> */}
                {achievements
                    .filter((achieve) => achieve.progress !== 100)
                    .slice(0, 3)
                    .map((achievement, index) => (
                        <AchievementRow {...achievement} key={index} />
                    ))}
            {/* </Grid> */}
        </Container>
    )
};