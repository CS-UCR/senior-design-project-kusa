import * as React from "react";
import {
    Container, Grid,
} from "@mui/material";

import { KusaHeader } from "../../components/Kusa/KusaHeader/KusaHeader";
import { default as invite } from "../../assets/friends/invite_mail.svg";
import { default as smile } from "../../assets/friends/creepySmile.svg";
import { useEffect, useState } from "react";
import { FriendsListField } from "../../components/FriendsList/FriendsListField/FriendsListField";
import { InviteListField } from "../../components/FriendsList/FriendsListField/InviteListField";
import { AddFriend } from "../../components/FriendsList/FriendsListField/AddFriendButton";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { BACKEND_URL } from "../../constants/backendURL";

export const FriendsList: React.FC = () => {
    const{ userId, name} = React.useContext(UserContext);

    const [inviteList, setInviteList] = useState([]);

    useEffect(() => {
    (
        async () => {
            const response = await fetch(`${BACKEND_URL}/getFriendRequest/${userId}`)
            const inviteList = await response.json();
            setInviteList(inviteList)
            }
        )();
    }, []);

    const [friendList, setFriendList] = useState([]);

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
           
            {inviteList.map(x => <InviteListField personInfo={x} inviteList={inviteList} setInviteList={setInviteList}  setFriendList={setFriendList} friendList={friendList} userId={userId}></InviteListField>)}
            
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

            {friendList.map(x => <FriendsListField friendInfo={x} friendList={friendList} setFriendList={setFriendList}  userId={userId}></FriendsListField>) }
            
        </Container>
    );
};
