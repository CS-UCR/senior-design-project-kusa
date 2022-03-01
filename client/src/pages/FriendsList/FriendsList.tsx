import * as React from "react";
import {
    Container, Grid,
} from "@mui/material";

import { KusaHeader } from "../../components/Kusa/KusaHeader/KusaHeader";
import { KusaBox } from "../../components/Kusa/KusaBox/KusaBox";
import { default as invite } from "../../assets/friends/invite_mail.svg";
import { default as smile } from "../../assets/friends/creepySmile.svg";
import { default as hand } from "../../assets/friends/hand.svg";






import { useEffect, useState } from "react";
import { FriendsListField } from "../../components/FriendsList/FriendsListField/FriendsListField";
import { InviteListField } from "../../components/FriendsList/FriendsListField/InviteListField";
import { AddFriend } from "../../components/FriendsList/FriendsListField/AddFriendButton";


import { render } from "@testing-library/react";

const baseURL = "http://127.0.0.1:8000/api/getFriendList/";

var thisAccountName = "Yuteng"


var array_of_people:any[] = []


export const FriendsList: React.FC = () => {

    const[inviteList,setInviteList] = useState([]);

    useEffect(() => {
    (
        async () => {
            const response = await fetch(`http://127.0.0.1:8000/api/getFriendRequest/${thisAccountName}`)
            const inviteList = await response.json();
            setInviteList(inviteList)

        }
    )();
    },[]);




    const[friendList,setFriendList] = useState([]);

    useEffect(() => {
    (
        async () => {
            const response = await fetch(`http://127.0.0.1:8000/api/getFriendList/${thisAccountName}` )
            const friendList = await response.json();
            setFriendList(friendList)
            
        }
    )();
    },[]);
    

    
    
    


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
            
            

            {inviteList.map(x => <InviteListField name={x} setInviteList={setInviteList} inviteList={inviteList} setFriendList={setFriendList} friendList={friendList}></InviteListField>)}
            

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
            
            
            
            <AddFriend></AddFriend>
            
            {friendList.map(x => <FriendsListField name={x} setFriendList={setFriendList} friendList={friendList}></FriendsListField>) }
            {console.log(friendList)}

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

            {/* {blocked()} */}
            
        </Container>
    );
};
