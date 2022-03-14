import * as React from "react";
import {
    Button,
    Grid,
} from "@mui/material";

import { KusaBox } from "../../Kusa/KusaBox/KusaBox";
import { BACKEND_URL } from "../../../constants/backendURL";
import { KusaWhiteSpace } from "./WhiteSpace";
import axios from "axios";
import { KusaHeader } from "../../Kusa/KusaHeader/KusaHeader";
const iconHeight = 60;
const personSteamid = 0;
const personName = 1;
const personImg = 2;

export const InviteListField: React.FC<any> = ({ personInfo, inviteList, setInviteList, friendList, setFriendList, userId }) => {

    const handleAccept = () => {
        //pass name to the backend
        axios.get(`${BACKEND_URL}/acceptFriendRequest/` + userId + "&" + personInfo[personSteamid])

        var newFriend;

        //remove person from invitelist
        for (var i = 0; i < inviteList.length; i++) {
            if (inviteList[i][personSteamid] === personInfo[personSteamid]){
                var newFriend = inviteList[i]
                inviteList.splice(i, 1);
                var newInviteList = inviteList
                break;
            }
        }

        var newInviteList = inviteList.filter(function (e: string) { return e !== personInfo[personSteamid] })
        setInviteList(newInviteList)

        //add person to friendlist

        friendList.push(newFriend)
        setFriendList(friendList)
    };

    const handleReject = () => {
        //pass name to the backend
        axios.get(`${BACKEND_URL}/rejectFriendRequest/` + userId + "&" + personInfo[personSteamid])

        for (var i = 0; i < inviteList.length; i++) {
            if (inviteList[i][personSteamid] === personInfo[personSteamid]) {
                inviteList.splice(i, 1);
                var newInviteList = inviteList
                break;
            }
        }

        var newInviteList = inviteList.filter(function (e: string) { return e !== personInfo[personName] })
        setInviteList(newInviteList)

    };

    return (

        <><KusaBox width="90%" styles={{ padding: "2rem" }}>
            <Grid container spacing={1} alignContent="center" marginTop="-10px" marginBottom="-10px" flexWrap="nowrap">
                <Grid item xs={1}>
                    <img
                        src={personInfo[personImg]}
                        alt="invite"
                        width={iconHeight}
                        height={iconHeight}
                        style={{ marginRight: "1rem", marginTop: "-0.5rem", marginBottom: "-0.5rem", borderRadius: '50%', }} />
                </Grid>
                <Grid item xs={1} />

                <Grid item xs={4} >
                    <KusaHeader styles={{
                        marginTop: "0.1rem",
                        marginBottom: "-0.1rem",
                        marginLeft: "-5rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "left",
                        fontSize: "30px",
                        fontWeight: "500",
                    }}>
                        {personInfo[personName]}
                    </KusaHeader>
                </Grid>

                <Grid item xs={2}></Grid>

                <Button variant="contained" size="large" color="primary" onClick={handleAccept} style={{ fontSize: 12, fontWeight: "bold", maxWidth: '50px', minHeight: '37px', maxHeight: '37px', marginTop: "0.5rem", marginBottom: "0.5rem" }} >
                    Accept
                </Button>

                <Grid item xs={1}></Grid>

                <Button variant="contained" color="primary" size="large" onClick={handleReject} style={{ fontSize: 12, fontWeight: "bold", maxWidth: '150px', maxHeight: '37px', minHeight: '37px', marginTop: "0.5rem", marginBottom: "0.5rem" }}>
                    Reject
                </Button>

            </Grid>

        </KusaBox><KusaWhiteSpace></KusaWhiteSpace></>
    );
}

