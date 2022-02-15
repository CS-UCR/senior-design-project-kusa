import * as React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { KusaBox } from "../../components/Kusa/KusaBox/KusaBox";
import { KusaHeader } from "../../components/Kusa/KusaHeader/KusaHeader";
import { default as chartbar } from "../../assets/home/chart-bar.svg";
import { default as trophy } from "../../assets/home/trophy.svg";
import KusaProgressBar from "../../components/Kusa/KusaProgressBar/KusaProgressBar";
import "./Home.scss";
import { AchieveContext } from "../../contexts/AchieveContext/AchieveContext";
import { Achievement } from "../../components/Achievement/Achievement";

export const Home: React.FC = () => {
    const { achievements } = React.useContext(AchieveContext);
    const iconHeight = 40;
    const testData = [{ bgcolor: "", completed: 30 }];
    const testData2 = [{ bgcolor: "", completed: 60 }];
    const testData3 = [{ bgcolor: "", completed: 100 }];

    return (
        <Container>
            <KusaHeader styles={{ marginTop: "7rem" }}>
                <img
                    src={trophy}
                    alt="trophy"
                    width={iconHeight}
                    height={iconHeight}
                    style={{ marginRight: "1rem", marginBottom: "-0.5rem" }}
                />
                achievements in your reach
            </KusaHeader>
            <Grid justifyContent="space-between" container>
                {achievements.slice(0, 3).map((achievement, index) => (
                    <Achievement {...achievement} key={index} />
                ))}
            </Grid>
            <Grid container style={{ justifyContent: "space-between" }}>
                <KusaBox
                    width="25%"
                    styles={{
                        padding: "1rem",
                        backgroundColor: "none",
                        borderRadius: 0,
                        boxShadow: 0,
                    }}
                >
                    <Grid container>
                        {testData.map((item, idx) => (
                            <KusaProgressBar
                                key={idx}
                                completed={item.completed}
                            />
                        ))}
                    </Grid>
                </KusaBox>

                <KusaBox
                    width="25%"
                    styles={{
                        padding: "1rem",
                        backgroundColor: "none",
                        borderRadius: 0,
                        boxShadow: 0,
                    }}
                >
                    <Grid container>
                        {testData2.map((item, idx) => (
                            <KusaProgressBar
                                key={idx}
                                completed={item.completed}
                            />
                        ))}
                    </Grid>
                </KusaBox>

                <KusaBox
                    width="25%"
                    styles={{
                        padding: "1rem",
                        backgroundColor: "none",
                        borderRadius: 0,
                        boxShadow: 0,
                    }}
                >
                    <Grid container>
                        {testData3.map((item, idx) => (
                            <KusaProgressBar
                                key={idx}
                                completed={item.completed}
                            />
                        ))}
                    </Grid>
                </KusaBox>
            </Grid>

 
            <KusaHeader>
                <img
                    src={chartbar}
                    alt="chartbar"
                    width={iconHeight}
                    height={iconHeight}
                    style={{ marginRight: "1rem", marginBottom: "-0.5rem" }}
                />
                metrics
            </KusaHeader>
            <KusaBox
                width="90%"
                styles={{ marginBottom: "5rem", padding: "2rem" }}
            >
                <Grid container spacing={2}></Grid>
            </KusaBox>
        </Container>
    );
};
