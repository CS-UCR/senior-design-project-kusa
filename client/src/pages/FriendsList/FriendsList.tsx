import * as React from "react";
import {
    Container, Grid,
} from "@mui/material";

import { KusaHeader } from "../../components/Kusa/KusaHeader/KusaHeader";
import { KusaBox } from "../../components/Kusa/KusaBox/KusaBox";
import { default as invite } from "../../assets/friends/invite_mail.svg";
import { default as smile } from "../../assets/friends/creepySmile.svg";
import { default as hand } from "../../assets/friends/hand.svg";


import { invites } from "./FriendsListHelperFunc/InviteHelper";
import { friends } from "./FriendsListHelperFunc/friendsHelper";
import { blocked } from "./FriendsListHelperFunc/blockHelper";
import { addFriends } from "./FriendsListHelperFunc/addFriendsHelper";




export const FriendsList: React.FC = () => {
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
            
            {invites()}
            

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
            {friends()}
            

            

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
