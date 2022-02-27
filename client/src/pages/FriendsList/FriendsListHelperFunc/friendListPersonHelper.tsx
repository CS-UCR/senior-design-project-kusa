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

import { useState } from "react";

import { KusaBox } from "../../../components/Kusa/KusaBox/KusaBox";
import { default as dog } from "../../../assets/friends/dog.svg"; //come back later
import { default as message } from "../../../assets/friends/message.svg";
import { KusaWSV } from "../../../components/Kusa/KusaWhiteSpaceVer/KusaWSV";

import { SearchFriend } from "./searchFriendsHelper";

import axios from "axios";





const iconHeight = 40;

var thisAccountName = "Yuteng"

const deleteURL = "http://127.0.0.1:8000/api/deleteFriend/";





export function Person_FriendList(name:any)
{
    

    const HandleMore = () => {
        //pass name to the backend
        // axios.get(rejectURL + thisAccountName + "&" + name).then((response) => {
        //     //console.log(response.data)
        //   });
          //{window.location.reload()}

        // setOpen(true);
          
    }

    const handleDelete = () => {
        axios.get(deleteURL + thisAccountName + "&" + name).then((response) => {
            //console.log(response.data)
          });
          
        
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

                <Button variant="contained" color="success" size="small" onClick={HandleMore}>
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




