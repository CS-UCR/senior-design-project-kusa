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

import { KusaBox } from "../../../components/Kusa/KusaBox/KusaBox";
import { default as dog } from "../../../assets/friends/dog.svg"; //come back later
import { default as message } from "../../../assets/friends/message.svg";
import { KusaWSV } from "../../../components/Kusa/KusaWhiteSpaceVer/KusaWSV";

import { SearchFriend } from "./searchFriendsHelper";

import axios from "axios";

const iconHeight = 40;

var thisAccountName = "Yuteng"

const acceptURL = "http://127.0.0.1:8000/api/acceptFriendRequest/";

const rejectURL = "http://127.0.0.1:8000/api/rejectFriendRequest/"

export function Person_New_Request(name:any)
{

    const handleAccept = () => {
        //pass name to the backend
        axios.get(acceptURL + thisAccountName + "&" + name).then((response) => {
            //console.log(response.data)
          });
          {window.location.reload()}
    };


    const handleReject = () => {
        //pass name to the backend
        axios.get(rejectURL + thisAccountName + "&" + name).then((response) => {
            //console.log(response.data)
          });
          {window.location.reload()}
    };


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

                <Grid item xs={6}></Grid>

                
                

                <Button variant="contained" color="success" size="small" onClick={handleAccept}>
                    accept
                    
                </Button>

                <Grid item xs={1}></Grid>

                <Button variant="contained" color="success" size="small" onClick={handleReject}>
                    reject
                </Button>

                


                <Grid item xs={2}>
                
                </Grid>
                
            </Grid>
            
        </KusaBox>

        

    );
}