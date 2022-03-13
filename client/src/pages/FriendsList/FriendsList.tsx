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

import { UserContext } from "../../contexts/UserContext/UserContext";

import { render } from "@testing-library/react";

import { BACKEND_URL } from "../../constants/backendURL";

import {Link} from "react-router-dom";








export const FriendsList: React.FC = () => {

    
    const
    {
        userId,
        name,
    } = React.useContext(UserContext);

    const[inviteList,setInviteList] = useState([]);

    useEffect(() => {
    (
        async () => {
            const response = await fetch(`${BACKEND_URL}/getFriendRequest/${userId}`)
            const inviteList = await response.json();
            setInviteList(inviteList)
            console.log(setInviteList)

        }
    )();
    },[]);




    const[friendList,setFriendList] = useState([]);

    useEffect(() => {
    (
        async () => {
            const response = await fetch(`${BACKEND_URL}/getFriendList/${userId}` )
            const friendList = await response.json();
            setFriendList(friendList);
            
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
            {console.log(userId)}
            {console.log(name)}
            
            

            {inviteList.map(x => <InviteListField personName={x} setInviteList={setInviteList} inviteList={inviteList} setFriendList={setFriendList} friendList={friendList} userId={userId} thisAccountName={name}></InviteListField>)}
            

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
            
            
            
            <AddFriend thisAccountUserId={userId}></AddFriend>
            {console.log(friendList)}
            {friendList.map(x => <FriendsListField friendName={x} setFriendList={setFriendList} friendList={friendList} userId={userId} thisAccountName={name}></FriendsListField>) }
            

            <KusaHeader>
                <img
                    src={hand}
                    alt="hand"
                    width={iconHeight}
                    height={iconHeight}
                    style={{ marginRight: "1rem", marginBottom: "-0.5rem" }}
                />
                
                


            </KusaHeader>

            {/* {blocked()} */}
            
        </Container>
    );
};
