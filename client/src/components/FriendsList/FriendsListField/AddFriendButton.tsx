import * as React from "react";
import { useState } from "react";
//import { getFriends } from "./friendsHelper";
// import { GetHelper } from "./getHelper";
import axios from "axios";

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
import { FormatUnderlinedSharp } from "@mui/icons-material";

import { KusaWhiteSpace } from "./WhiteSpace";

import { BACKEND_URL } from "../../../constants/backendURL";
// var userId:string;
// var friendsList: {} | null | undefined = []




export const AddFriend: React.FC<any> = ({ thisAccountUserId, setFriendList, friendList }) =>
{
    

    const [open, setOpen] = React.useState(false);


    const [value, setValue] = useState("");

    // const [post, setPost] = useState(null);

    const handleChange = (e: { target: { value: any; }; }) => {
        setValue(e.target.value)
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {

        setOpen(false);
    };

    const handleSearch = () => {
         //if user input is null ask them to make a input or cancel -----------------------------------------------
        // userId = value;
        setValue("");
        setOpen(false);
        axios.get(`${BACKEND_URL}/friendRequest/` + value + "&" + thisAccountUserId).then((response) => {
            
          });
        
        console.log(value)
    }

    return (
        <><Grid>
            <Button variant="contained" color="primary" onClick={handleClickOpen} style={{fontWeight:"bold"}}>
                add friends
            </Button>
            <Dialog open={open} onClose={handleClose} color="warning">
                <DialogTitle style={{fontWeight:"bold"}}>Search Friend</DialogTitle>
                <DialogContent>
                    <DialogContentText style={{fontWeight:"bold", color:"green"}}>
                        Please type the user's steamid below
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="steamid"
                        type="name"
                        fullWidth
                        variant="outlined"
                        
                        // sx={{input:{color:'black'}}}
                        // color = "success"
                        value={value}
                        onChange={handleChange} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSearch}>search</Button>
                    {/* {GetHelper(value)} */}
                </DialogActions>
            </Dialog>
            {/* {friendsList} */}

        </Grid><KusaWhiteSpace></KusaWhiteSpace></>

    );


}


    
    
