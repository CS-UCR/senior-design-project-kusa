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
import { IconChartBar, IconTrophy } from "@tabler/icons";
import { AchieveContext } from "../../contexts/AchieveContext/AchieveContext";
import { Achievement } from "../../components/Achievement/Achievement";
import { ResponsiveLine, Serie } from "@nivo/line";
import { KusaLoadingSpinner } from "../../components/Kusa/KusaSpinner/KusaLoadingSpinner";
import axios from "axios";
import { BACKEND_URL } from "../../constants/backendURL";
import { headers } from "../../constants/headers";

interface HourData {
    date: string;
    hours: number;
}

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
        axios
            .get(`${BACKEND_URL}/getPlaytime`, {
                headers,
                withCredentials: true,
            })
            .then((payload) => {
                let holder: Serie[] = [{ id: "playtime", color: "", data: [] }];
                payload.data.forEach((item: HourData) =>
                    holder[0].data.push({ x: item.date, y: item.hours })
                );
                setPlayTime(holder);
                setLoading(false);
            })
            .catch((err) => {
                setPlayTime([]);
                console.log(err);
            });
        setLoading(false);
    }, []);

    const getCurrentTime = () => {
        let shiftNum = 0;
        let copy = playTime;
        const current = new Date().toLocaleDateString("en-US");
        let currentIndex = playTime[0]?.data.length;

        copy[0]?.data.forEach((item, index) => {
            if (item.x === current) currentIndex = index;
        });

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
                <IconTrophy height={iconHeight}/>
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
                    <IconChartBar height={iconHeight}/>
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
                            format: (value) => `${value}hr`,
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
                    <Typography
                        textAlign="center"
                        variant="h6"
                        color="neutral.main"
                    >
                        Metrics are currently unavailable.
                    </Typography>
                )}
            </KusaBox>
        </Container>
    );
};
