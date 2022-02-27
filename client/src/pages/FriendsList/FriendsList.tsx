import * as React from "react";
import {
    Container, Grid,
} from "@mui/material";

import { KusaHeader } from "../../components/Kusa/KusaHeader/KusaHeader";
import { KusaBox } from "../../components/Kusa/KusaBox/KusaBox";
import { default as invite } from "../../assets/friends/invite_mail.svg";
import { default as smile } from "../../assets/friends/creepySmile.svg";
import { default as hand } from "../../assets/friends/hand.svg";


import { Invites } from "./FriendsListHelperFunc/InviteHelper";
import { Friends } from "./FriendsListHelperFunc/friendsHelper";
import { blocked } from "./FriendsListHelperFunc/blockHelper";
import { addFriends } from "./FriendsListHelperFunc/addFriendsHelper";

import { useEffect, useState } from "react";
import { FriendsListField } from "../../components/FriendsList/FriendsListField/FriendsListField";
import { render } from "@testing-library/react";

const baseURL = "http://127.0.0.1:8000/api/getFriendList/";

var thisAccountName = "Yuteng"


var array_of_people:any[] = []


export const FriendsList: React.FC = () => {

    const[data,setData] = useState([]);

    useEffect(() => {
    (
        async () => {
            const response = await fetch(`http://127.0.0.1:8000/api/getFriendList/${thisAccountName}` )
            const data = await response.json();
            setData(data)
            
        }
    )();
    },[]);
    console.log(data)

    const refresh = () => {
        
    }
    
    // array_of_people = []

    // for (var i = 0; i < data.length; i++)
    // {
    //     array_of_people.push(Person_FriendList(data[i]))
    //     array_of_people.push(wsv())
    // }


    const iconHeight = 40;
    return (
        <Container>
            
            <KusaHeader>
                <img
                    src={invite}
                    alt="invite"
                    width={iconHeight}
                    height={iconHeight}
                    style={{ marginRight: "1rem", marginBottom: "-0.5rem" }}
                />
                invites
            </KusaHeader>
            
            {Invites()}
            

            <KusaHeader>
                <img
                    src={smile}
                    alt="smile"
                    width={iconHeight}
                    height={iconHeight}
                    style={{ marginRight: "1rem", marginBottom: "-0.5rem" }}
                />
                
                friends
            </KusaHeader>
            
            {addFriends()}
            {/* {Friends()} */}
            
            {/* /{loop} */}
            {/* for(int i = x )
            {
                return(
                    <FriendsList person={array_of_people[i]}> </FriendsList>
                )
                
            } */}

            {/* {data.map(x => <FriendsList> </FriendsList>)} */}
            
            {data.map(x => <FriendsListField name={x} setData={setData}></FriendsListField>)}
            {console.log(data)}

            <KusaHeader>
                <img
                    src={hand}
                    alt="hand"
                    width={iconHeight}
                    height={iconHeight}
                    style={{ marginRight: "1rem", marginBottom: "-0.5rem" }}
                />
                blocked
            </KusaHeader>

            {blocked()}
            
        </Container>
    );
};
