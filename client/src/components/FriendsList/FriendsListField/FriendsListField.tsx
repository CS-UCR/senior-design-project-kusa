

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

import { KusaWhiteSpace } from "./WhiteSpace";

import { BACKEND_URL } from "../../../constants/backendURL";

import { Link } from "react-router-dom";

const iconHeight = 40;








export const FriendsListField: React.FC<any> = ({ friendName, setFriendList, friendList, userId, thisAccountName}) =>
{

    
    const handleDelete = () => {
        axios.get(`${BACKEND_URL}/deleteFriend/` + thisAccountName + "&" + friendName).then((response) => {
            //console.log(response.data)
          });
        console.log(friendList)
        var newFriendList = friendList.filter(function(e: string) {return e !== friendName})
        console.log(newFriendList)
        setFriendList(newFriendList)
        
    }
    
    
    
    

    return(
        <><KusaBox width="90%" styles={{ padding: "2rem" }}>
            <Grid container spacing={1}>
                <Grid item xs={1}>
                    <img
                        src={dog}
                        alt="invite"
                        width={iconHeight}
                        height={iconHeight}
                        style={{ marginRight: "1rem", marginBottom: "-0.5rem" }} />
                </Grid>
                <Grid item xs={1} />

                <Grid item xs={1}>
                    {friendName}

                </Grid>

                <Grid item xs={4}></Grid>

                <Link to="/chat" style={{ textDecoration: 'none' }}>
                 
                
                    <Button variant="contained" color="success" size="large">
                        Chat
                    </Button>

                </Link>

                <Grid item xs={2}></Grid>

                <Button variant="contained" color="success" size="small" onClick={handleDelete}>
                    Remove Friend
                </Button>

                <Grid item xs={2}>

                </Grid>

            </Grid>



        </KusaBox><KusaWhiteSpace></KusaWhiteSpace></>
    );
}