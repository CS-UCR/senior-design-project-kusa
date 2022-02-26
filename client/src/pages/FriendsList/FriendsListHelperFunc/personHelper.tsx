
import * as React from "react";
import {
    Grid,
} from "@mui/material";

import { KusaBox } from "../../../components/Kusa/KusaBox/KusaBox";
import { default as dog } from "../../../assets/friends/dog.svg"; //come back later
import { default as message } from "../../../assets/friends/message.svg";

import { SearchFriend } from "./searchFriendsHelper";

const iconHeight = 40;




export function person(name:any)
{

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

                
                <Grid item xs={4}/>
                <Button variant="contained" color="success" size="small">
                    more
                </Button>

                


                <Grid item xs={2}>
                    {/* <img
                    src={message}
                    alt="invite"
                    width={iconHeight}
                    height={iconHeight}
                    style={{ marginRight: "1rem", marginBottom: "-0.5rem" }}/> */}
                
                </Grid>
                
            </Grid>
            
        </KusaBox>

        

    );
}

