import * as React from "react";
import {
    Alert,
    AlertColor,
    Box,
    Button,
    Container,
    Grid,
    Typography,
} from "@mui/material";
import { KusaBox } from "../../components/Kusa/KusaBox/KusaBox";
import { KusaHeader } from "../../components/Kusa/KusaHeader/KusaHeader";
import { default as chartbar } from "../../assets/home/chart-bar.svg";
import { default as trophy } from "../../assets/home/trophy.svg";
import { UserContext } from "../../contexts/UserContext/UserContext";
import KusaProgressBar from "../../components/Kusa/KusaProgressBar/KusaProgressBar";
import "./Home.scss";


// can prolly get data from UserContext when we add achievements
export const Home: React.FC = () => {
    const iconHeight = 40;
    
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
                <KusaBox width="25%"  styles={{ padding: "2rem" }}>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            
                        </Grid>
                        <Grid item xs={8}>
                            
                        </Grid>
                    </Grid>
                </KusaBox>
                
                
                <KusaBox width="25%"  styles={{ padding: "2rem" }}>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            
                        </Grid>
                        <Grid item xs={8}>
                            
                        </Grid>
                    </Grid>
                </KusaBox>
                
                <KusaBox width="25%"  styles={{ padding: "2rem" }}>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            
                        </Grid>
                        <Grid item xs={8}>
                            
                        </Grid>
                    </Grid>
                </KusaBox>
                
            </Grid>
            <Grid container style={{justifyContent: "space-between" }}>
                <KusaBox
                    width="25%" 
                    styles={{
                        padding: "2rem",
                        backgroundColor: "none",
                        borderRadius: 0,
                        boxShadow: 0 }}>

                    <Grid container spacing={2}>
                        {testData.map((item, idx) => (
                            <KusaProgressBar key={idx} completed={item.completed} />
                        ))}
                    </Grid>
                </KusaBox>
                
                <KusaBox
                    width="25%" 
                    styles={{
                        padding: "2rem",
                        backgroundColor: "none",
                        borderRadius: 0,
                        boxShadow: 0 }}>

                    <Grid container spacing={2}>
                        {testData2.map((item, idx) => (
                            <KusaProgressBar key={idx} completed={item.completed} />
                        ))}
                    </Grid>
                </KusaBox>

                <KusaBox
                    width="25%" 
                    styles={{
                        padding: "2rem",
                        backgroundColor: "none",
                        borderRadius: 0,
                        boxShadow: 0 }}>

                    <Grid container spacing={2}>
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
