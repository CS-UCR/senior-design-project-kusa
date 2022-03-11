import * as React from "react";
import {
    Container,
    Grid,
} from "@mui/material";
import { KusaHeader } from "../../components/Kusa/KusaHeader/KusaHeader";
import { default as trophy } from "../../assets/home/trophy.svg";
import { AchieveContext } from "../../contexts/AchieveContext/AchieveContext";
import { AchievementRow } from "../../components/Achievement/AchievementRow";
import { KusaLoadingSpinner } from "../../components/Kusa/KusaSpinner/KusaLoadingSpinner";
import axios from "axios";
import { BACKEND_URL } from "../../constants/backendURL";
import { headers } from "../../constants/headers";

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
    const { achievements, setAchievements } = React.useContext(AchieveContext);
    const [loading, setLoading] = React.useState(false);
    const iconHeight = 40;
    React.useEffect(() => {
        setLoading(true);
        axios
        .get(`${BACKEND_URL}/getAchievements`, {
            headers,
            withCredentials: true,
        })
        .then((response) => {
            console.log(response.data)
            const achievements = response.data
            setAchievements({achievements});
            setLoading(false);
        })
        .catch((err) => {
            setAchievements([] as any);
            console.log(err);
        });
        setLoading(false);
    }, []);
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
                {achievements
                    .map((achievement, index) => (
                        <AchievementRow {...achievement} key={index} />
                    ))}
            <KusaLoadingSpinner loading={loading} />
        </Container>
    )
};