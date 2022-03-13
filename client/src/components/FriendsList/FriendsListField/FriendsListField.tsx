import * as React from "react";
import {
    Button,
    Grid,
} from "@mui/material";
import axios from "axios";
import { KusaBox } from "../../Kusa/KusaBox/KusaBox";
import { KusaWhiteSpace } from "./WhiteSpace";

import { BACKEND_URL } from "../../../constants/backendURL";

import { useNavigate } from "react-router-dom";
import { KusaHeader } from "../../Kusa/KusaHeader/KusaHeader";

const iconHeight = 60;
const friendSteamid = 0;
const friendName = 1;
const friendImg = 2;

export const FriendsListField: React.FC<any> = ({ friendInfo, friendList, setFriendList, userId }) => {
    const handleDelete = () => {
        axios.get(`${BACKEND_URL}/deleteFriend/` + userId + "&" + friendInfo[friendSteamid]).then((response) => {
        });


        for (var i = 0; i < friendList.length; i++) {
            if (friendList[i][friendName] === friendInfo[friendName]) {
                friendList.splice(i, 1);
                var newFriendList = friendList
            }
        }
        var newFriendList = friendList.filter(function (e: string) { return e !== friendInfo[friendName] })
        setFriendList(newFriendList)

    }
    
    let navigate = useNavigate();
    function handleChat() {
        axios.get(`${BACKEND_URL}/addConversation/` + userId + "&" + friendInfo[friendSteamid]).then(() => {
            navigate('/chat');
        })
    }
    

    return (
        <><KusaBox width="90%" styles={{ padding: "2rem" }}>
            <Grid container spacing={1} alignContent="center" marginTop="-10px" marginBottom="-10px" flexWrap="nowrap">
                <Grid item xs={1}>
                    <img
                        src={friendInfo[friendImg]}
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
                        {friendInfo[friendName]}
                    </KusaHeader>
                </Grid>

                <Grid item xs={2}></Grid>

                {/* <Link to="/chat" style={{ textDecoration: 'none' }}> */}
                    <Button variant="contained" size="large" color="primary" onClick={() =>{handleChat()}} style={{ fontSize: 12, fontWeight: "bold", maxWidth: '50px', minHeight: '37px', maxHeight: '37px', marginTop: "0.5rem", marginBottom: "0.5rem" }} >
                        Chat
                    </Button>
                {/* </Link> */}

                <Grid item xs={1}></Grid>

                <Button variant="contained" color="primary" size="large" onClick={handleDelete} style={{ fontSize: 12, fontWeight: "bold", maxWidth: '150px', maxHeight: '37px', minHeight: '37px', marginTop: "0.5rem", marginBottom: "0.5rem" }}>
                    Remove Friend
                </Button>
            </Grid>
        </KusaBox><KusaWhiteSpace></KusaWhiteSpace></>
    );
}