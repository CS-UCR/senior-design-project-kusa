

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

import { KusaBox } from "../../Kusa/KusaBox/KusaBox";
import { default as dog } from "../../../assets/friends/dog.svg"; //come back later

import { BACKEND_URL } from "../../../constants/backendURL";

import axios from "axios";

const iconHeight = 40;







export const InviteListField: React.FC<any> = ({ personName, setInviteList, inviteList, setFriendList, friendList, thisAccountName }) => {

    const handleAccept = () => {
        //pass name to the backend
        axios.get(`${BACKEND_URL}/acceptFriendRequest/` + thisAccountName + "&" + personName).then((response) => {
            //console.log(response.data)
          });

        //remove person from invitelist
        var newInviteList = inviteList.filter(function(e:string) {return e !== personName})
        setInviteList(newInviteList)
        
        //add person to friendlist
        friendList.push(personName)
        setFriendList(friendList)
          
    };


    const handleReject = () => {
        //pass name to the backend
        axios.get(`${BACKEND_URL}/rejectFriendRequest/` + thisAccountName + "&" + personName).then((response) => {
            //console.log(response.data)
          });
        
        console.log(inviteList)
        var newInviteList = inviteList.filter(function(e:string) {return e !== personName})
        setInviteList(newInviteList)
        console.log(newInviteList)

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
                            
                            {personName}
                        </Grid>

                        <Grid item xs={4}></Grid>              

                        <Button variant="contained" color="success" size="small" onClick={handleAccept} >
                            Accept
                        </Button>

                        <Grid item xs={2}></Grid>

                        <Button variant="contained" color="success" size="small" onClick={handleReject}>
                            Reject
                        </Button>

                        <Grid item xs={2}>
                        
                        </Grid>
                        
                    </Grid>
                    
                </KusaBox>


    );





}
    