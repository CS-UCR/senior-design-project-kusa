

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

import { KusaBox } from "../../Kusa/KusaBox/KusaBox";
import { default as dog } from "../../../assets/friends/dog.svg"; //come back later

import { BACKEND_URL } from "../../../constants/backendURL";
import { KusaWhiteSpace } from "./WhiteSpace";
import axios from "axios";

const iconHeight = 40;

const personSteamid = 0;
const personName = 1;
const personImg = 2;





export const InviteListField: React.FC<any> = ({ personInfo, inviteList, setInviteList, friendList, setFriendList, userId }) => {

    const handleAccept = () => {
        //pass name to the backend
        axios.get(`${BACKEND_URL}/acceptFriendRequest/` + userId + "&" + personInfo[personSteamid]).then((response) => {
            //console.log(response.data)
          });
        
        var newFriend;  

        //remove person from invitelist
        for(var i = 0; i < inviteList.length; i++)
        {
            console.log(inviteList)
            if(inviteList[i][personName] === personInfo[personName])
            {
                var newFriend = inviteList[i]
                inviteList.splice(i,1);
                var newInviteList = inviteList
                
            }
        }

        var newInviteList = inviteList.filter(function(e: string) {return e !== personInfo[personName] })
        setInviteList(newInviteList)
        
        //add person to friendlist
        
        friendList.push(newFriend)
        setFriendList(friendList)
        
          
    };


    const handleReject = () => {
        //pass name to the backend
        axios.get(`${BACKEND_URL}/rejectFriendRequest/` + userId + "&" + personInfo[personSteamid]).then((response) => {
            //console.log(response.data)
          });
        
        for(var i = 0; i < inviteList.length; i++)
        {
            if(inviteList[i][personName] === personInfo[personName])
            {
                inviteList.splice(i,1);
                var newInviteList = inviteList
            }
        }
        
        var newInviteList = inviteList.filter(function(e: string) {return e !== personInfo[personName] })
        setInviteList(newInviteList)

    };






    return(

        <><KusaBox width="90%" styles={{ padding: "2rem" }}>
            <Grid container spacing={1}>
                <Grid item xs={1}>
                    <img
                        src={personInfo[personImg]}
                        alt="invite"
                        width={iconHeight}
                        height={iconHeight}
                        style={{ marginRight: "1rem", marginBottom: "-0.5rem" }} />
                </Grid>
                <Grid item xs={1} />

                <Grid item xs={1}>

                    {personInfo[personName]}
                </Grid>

                <Grid item xs={4}></Grid>

                <Button variant="contained" color="success" size="small" onClick={handleAccept}>
                    Accept
                </Button>

                <Grid item xs={2}></Grid>

                <Button variant="contained" color="success" size="small" onClick={handleReject}>
                    Reject
                </Button>

                <Grid item xs={2}>

                </Grid>

            </Grid>

        </KusaBox><KusaWhiteSpace></KusaWhiteSpace></>
    );





}
    
