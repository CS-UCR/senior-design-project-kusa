

// export const ProfileField: React.FC<any> = ({ children, styles }) => (
//     <Box
//         sx={{
//             boxShadow: 2,
//             borderRadius: 2,
//             height: "4rem",
//             backgroundColor: "secondary.contrastText",
//             alignItems: "bottom",
//             verticalAlign: "text-bottom",
//             justifyContent: "center",
//             ...styles,
//         }}
//     >
//         <Typography
//             variant="subtitle1"
//             fontSize="1.2rem"
//             lineHeight={3.5}
//             maxWidth="78ch"
//             textAlign="center"
//         >
//             {children}
//         </Typography>
//     </Box>
// );

import * as React from "react";
import {
    Alert,
    AlertColor,
    Box,
    Button,
    Container,
    Grid,
    Typography,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
    
    
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { KusaBox } from "../../Kusa/KusaBox/KusaBox";
import { default as dog } from "../../../assets/friends/dog.svg"; //come back later
import { setRangeValue } from "react-tsparticles";
const iconHeight = 40;
var thisAccountName = "Yuteng"

const deleteURL = "http://127.0.0.1:8000/api/deleteFriend/";







export const FriendsListField: React.FC<any> = ({ name, setData, data }) =>
{

    
    const handleDelete = () => {
        axios.get(deleteURL + thisAccountName + "&" + name).then((response) => {
            //console.log(response.data)
          });
        
        setData([])
    }
    
    
    
    

    return(
        <KusaBox width="90%" styles={{ padding: "2rem" }}>
                    <Grid container spacing={1}>
                        <Grid item xs={1}>
                        <img
                        src={dog}
                        alt="invite"
                        width={iconHeight}
                        height={iconHeight}
                        style={{ marginRight: "1rem", marginBottom: "-0.5rem" }}/>
                        </Grid>
                        <Grid item xs={1}/>
                            
                        <Grid item xs={1}>
                            {name}
                            
                        </Grid>

                        <Grid item xs={4}></Grid>              

                        <Button variant="contained" color="success" size="small" >
                            Chat
                        </Button>

                        <Grid item xs={2}></Grid>

                        <Button variant="contained" color="success" size="small" onClick={handleDelete}>
                            Remove Friend
                        </Button>

                        <Grid item xs={2}>
                        
                        </Grid>
                        
                    </Grid>
                    
                </KusaBox>
    );
}