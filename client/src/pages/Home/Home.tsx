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
import { Achievement } from "../../components/Achievement/Achievement";
import { ResponsiveLine, Serie } from "@nivo/line";
import { KusaLoadingSpinner } from "../../components/Kusa/KusaSpinner/KusaLoadingSpinner";
import axios from "axios";

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

export const Home: React.FC = () => {
    const { achievements } = React.useContext(AchieveContext);
    const [playTime, setPlayTime] = React.useState<Serie[]>([]);
    const [period, setPeriod] = React.useState<string>("week");
    const [loading, setLoading] = React.useState(false);
    const iconHeight = 40;

    React.useEffect(() => {
        setLoading(true);
        //insert endpoint request here for playtime
        //our real implementation would not be missing days as we gather this info everyday on the backend
        setPlayTime([
            {
                id: "week",
                color: "",
                data: [
                    { x: "2/01/2022", y: 224 },
                    { x: "2/07/2022", y: 224 },
                    { x: "2/08/2022", y: 20 },
                    { x: "2/09/2022", y: 30 },
                    { x: "2/10/2022", y: 100 },
                    { x: "2/11/2022", y: 200 },
                    { x: "2/12/2022", y: 40 },
                    { x: "2/13/2022", y: 2 },
                    { x: "2/14/2022", y: 220 },
                    { x: "2/15/2022", y: 6 },
                    { x: "2/16/2022", y: 2 },
                    { x: "2/21/2022", y: 200 },
                ],
            },
        ]);
        setLoading(false);
    }, []);

    const getCurrentTime = () => {
        let shiftNum = 0;
        let copy = playTime;
        const current = new Date().toLocaleDateString("en-US");
        let currentIndex = 0;

        copy[0]?.data.forEach((item, index) => {
            if (item.x === current) currentIndex = index;
        });

        console.log("current index is", currentIndex, "from", current);
        switch (period) {
            case "week":
                shiftNum = 7;
                break;
            case "month":
                shiftNum = 30;
                break;
            case "year":
                shiftNum = 365;
                break;
            default:
                shiftNum = 7;
                break;
        }
        if (!copy[0]?.data || !copy[0]) return [];
        return [
            {
                ...playTime[0],
                data: copy[0].data.slice(currentIndex - shiftNum, currentIndex),
            },
        ];
    };

    return (
        <Container>
            <KusaLoadingSpinner loading={loading} />
            <KusaHeader styles={{ marginTop: "5rem" }}>
                <img
                    src={trophy}
                    alt="trophy"
                    width={iconHeight}
                    height={iconHeight}
                    style={{ marginRight: "1rem", marginBottom: "-0.5rem" }}
                />
                achievements in your reach
            </KusaHeader>
            <Grid container spacing={5}>
                {achievements
                    .filter((achieve) => achieve.progress !== 100)
                    .slice(0, 3)
                    .map((achievement, index) => (
                        <Achievement {...achievement} key={index} />
                    ))}
            </Grid>
            <Box style={{ marginBottom: "3rem" }}>
                <Select
                    label="Week"
                    variant="filled"
                    value={period ?? "week"}
                    style={{ float: "right" }}
                    onChange={(e) => {
                        setPeriod(e.target.value);
                        getCurrentTime();
                    }}
                    sx={{
                        color: "secondary.contrastText",
                    }}
                >
                    <MenuItem value="week">Week</MenuItem>
                    <MenuItem value="month">Month</MenuItem>
                    <MenuItem value="year">Year</MenuItem>
                </Select>
                <KusaHeader>
                    <img
                        src={chartbar}
                        alt="chartbar"
                        width={iconHeight}
                        height={iconHeight}
                        style={{
                            marginRight: "1rem",
                            marginBottom: "-0.5rem",
                            display: "inline-block",
                        }}
                    />
                    metrics
                </KusaHeader>
            </Box>
            <KusaBox
                width="90%"
                height={390}
                styles={{ marginBottom: "5rem", padding: "2rem" }}
            >
                {getCurrentTime()[0]?.data.length > 0 ? (
                    <ResponsiveLine
                        data={getCurrentTime()}
                        colors={{ scheme: "accent" }}
                        xScale={{ type: "point" }}
                        yScale={{
                            type: "linear",
                            min: "auto",
                            max: "auto",
                            stacked: true,
                            reverse: false,
                        }}
                        axisLeft={{
                            format: (value) => `${value}min`,
                        }}
                        lineWidth={5}
                        pointLabelYOffset={1}
                        pointSize={12}
                        curve="monotoneX"
                        pointBorderWidth={3}
                        useMesh={true}
                        enableSlices={false}
                        enableGridY={false}
                        margin={{ top: 10, right: 20, bottom: 60, left: 80 }}
                        animate={true}
                        theme={theme}
                    />
                ) : (
                    <Typography textAlign="center" variant="h6" color="neutral.main">
                        Metrics are currently unavailable.
                    </Typography>
                )}
            </KusaBox>
        </Container>
    );
};
