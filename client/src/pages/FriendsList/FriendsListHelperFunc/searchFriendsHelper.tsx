import * as React from "react";
import { useState } from "react";
import { getFriends } from "./friendsHelper";
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

var userName:string;
var friendsList: {} | null | undefined = []


const baseURL = "http://127.0.0.1:8000/api/read_post/GamerOne";

export function SearchFriend()
{
    

    
    // const [post, setPost] = React.useState(null);

    const [open, setOpen] = React.useState(false);
    
    
    const [value, setValue] = useState("");

    const [post, setPost] = useState(null);

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
        setOpen(false);
        getFriends(userName);
        // friendsList = friends(userName) 
        // console.log(friendsList)
        
        axios.get(baseURL).then((response) => {
            setPost(response.data);
            //console.log(response.data)
          });
        
        console.log(post)
        //if (!post) return null;
        
        
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
                    {/* {GetHelper(value)} */}
                </DialogActions>
            </Dialog>
            {/* {friendsList} */}
            
        </Grid> 
        
    )

    //need to do call post data to backend do logic search database
    //right now just testing the frontend structure
    
}