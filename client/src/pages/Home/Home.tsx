import * as React from "react";
import {
    Container,
    Grid,
    Typography,
} from "@mui/material";
import { KusaBox } from "../../components/Kusa/KusaBox/KusaBox";
import { KusaHeader } from "../../components/Kusa/KusaHeader/KusaHeader";
import { default as chartbar } from "../../assets/home/chart-bar.svg";
import { default as trophy } from "../../assets/home/trophy.svg";
import { default as run } from "../../assets/achievements/run.svg";
import { default as karate } from "../../assets/achievements/karate.svg";
import { default as seeding} from "../../assets/achievements/seeding.svg";
import KusaProgressBar from "../../components/Kusa/KusaProgressBar/KusaProgressBar";
import "./Home.scss";


// can prolly get data from UserContext when we add achievements
export const Home: React.FC = () => {
    const iconHeight = 40;
    const achievementHeight = 200;
    const testData = [
        { bgcolor: "", completed: 30 },
      ];
      
      const testData2 = [
        { bgcolor: "", completed: 60 },
      ];
     
      const testData3 = [
        { bgcolor: "", completed: 100 },
      ];
      
    return (
        <Container>

{/* Achievements In Your Reach */}        
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

        <Grid container style={{justifyContent: "space-between" }}>
                <KusaBox width="25%" styles={{ padding: "1rem"}}>
                    <Grid container 
                        sx={{
                            alignContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            flexWrap: "nowrap",
                            }}>
                        <Grid item xs={10}>
                            <img
                                src={run}
                                alt="run"
                                width={achievementHeight}
                                height={achievementHeight}
                                style={{ alignContent: "center", alignItems: "center" }}
                            />
                        </Grid>
                        <Grid item xs={10}>
                            <Typography
                                variant="h6"
                                marginTop={1}
                                color="#F9FBE8"
                            >
                                can't stop wont' stop
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
                                maintain your streak for one week
                            </Typography>
                        </Grid>
                    </Grid>
                </KusaBox>
                
                <KusaBox width="25%" styles={{ padding: "1rem"}}>
                    <Grid container 
                        sx={{
                            alignContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            flexWrap: "nowrap",
                            }}>
                        <Grid item xs={10}>
                            <img
                                src={karate}
                                alt="karate"
                                width={achievementHeight}
                                height={achievementHeight}
                                style={{ alignContent: "center", alignItems: "center" }}
                            />
                        </Grid>
                        <Grid item xs={10}>
                            <Typography
                                variant="h6"
                                marginTop={1}
                                color="#F9FBE8"
                            >
                                kick your habits
                            </Typography>
                        </Grid>
                        <Grid item xs={10}>
                            <Typography
                                marginTop={1}
                                marginLeft={-2}
                                marginRight={-2}
                                marginBottom={1}
                                textAlign="center"
                                color="#F9FBE8"
                            >
                               play 30 minutes less than last week
                            </Typography>
                        </Grid>
                    </Grid>
                </KusaBox>
                
                <KusaBox width="25%" styles={{ padding: "1rem"}}>
                    <Grid container 
                        sx={{
                            alignContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            flexWrap: "nowrap",}}>
                        <Grid item xs={10}>
                            <img
                                src={seeding}
                                alt="seeding"
                                width={achievementHeight}
                                height={achievementHeight}
                                style={{ alignContent: "center", alignItems: "center" }}
                            />
                        </Grid>
                        <Grid item xs={10}>
                            <Typography
                                variant="h6"
                                marginTop={1}
                                color="#F9FBE8"
                            >
                                touch some grass
                            </Typography>
                        </Grid>

                        <Grid item xs={10}>
                            <Typography
                                marginTop={1}
                                marginLeft={-2}
                                marginRight={-2}
                                marginBottom={1}
                                textAlign="center"
                                color="#F9FBE8"
                            >
                                link up with another user and go outside
                            </Typography>
                        </Grid>
                    </Grid>
                </KusaBox>
            </Grid>
            
            <Grid container style={{justifyContent: "space-between" }}>
                <KusaBox
                    width="25%" 
                    styles={{
                        padding: "1rem",
                        backgroundColor: "none",
                        borderRadius: 0,
                        boxShadow: 0 }}>

                    <Grid container>
                        {testData.map((item, idx) => (
                            <KusaProgressBar key={idx} completed={item.completed} />
                        ))}
                    </Grid>
                </KusaBox>
                
                <KusaBox
                    width="25%" 
                    styles={{
                        padding: "1rem",
                        backgroundColor: "none",
                        borderRadius: 0,
                        boxShadow: 0 }}>

                    <Grid container>
                        {testData2.map((item, idx) => (
                            <KusaProgressBar key={idx} completed={item.completed} />
                        ))}
                    </Grid>
                </KusaBox>

                <KusaBox
                    width="25%" 
                    styles={{
                        padding: "1rem",
                        backgroundColor: "none",
                        borderRadius: 0,
                        boxShadow: 0 }}>

                    <Grid container>
                        {testData3.map((item, idx) => (
                            <KusaProgressBar key={idx} completed={item.completed} />
                        ))}
                    </Grid>
                </KusaBox>
                
            </Grid>

{/* Upcoming Metrics */}
            <KusaHeader>
                <img
                    src={chartbar}
                    alt="chartbar"
                    width={iconHeight}
                    height={iconHeight}
                    style={{ marginRight: "1rem", marginBottom: "-0.5rem" }}
                />
                upcoming metrics
            </KusaHeader>
            <KusaBox
                width="90%"
                styles={{ marginBottom: "5rem", padding: "2rem" }}
            >
                <Grid container spacing={2}>
 
                </Grid>
            </KusaBox>
        </Container>
    );
};
