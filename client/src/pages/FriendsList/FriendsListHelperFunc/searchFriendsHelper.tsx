import * as React from "react";
import { useState } from "react";
import { getFriends } from "./friendsHelper";

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

var userName:string;
var friendsList: {} | null | undefined = []

export function SearchFriend()
{
    const [open, setOpen] = React.useState(false);
    
    const [value, setValue] = useState("");

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
        userName = value;
        setValue("");
        // console.log(value);
        console.log(userName);
        setOpen(false);
        getFriends(userName);
        // friendsList = friends(userName) 
        // console.log(friendsList)
    }

    
    


    return(
        <Grid>
            <Button variant="contained" color="success" onClick={handleClickOpen}>
                add friends
            </Button>
            <Dialog open={open} onClose={handleClose} color="warning">
                <DialogTitle>Search Friend</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please type the user name below
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="User Name"
                        type="name"
                        fullWidth
                        variant="outlined"
                        // sx={{input:{color:'black'}}}
                        // color = "success"
                        value = {value}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSearch} >search</Button>
                </DialogActions>
            </Dialog>
            {/* {friendsList} */}
            
        </Grid> 
        
    )

    //need to do call post data to backend do logic search database
    //right now just testing the frontend structure
    
}