import * as React from "react";
import {
    Box,
    Container,
    Grid,
    MenuItem,
    Select,
    Typography,
} from "@mui/material";
import "../../pages/Chat/Chat.css";
import { KusaHeader } from "../../components/Kusa/KusaHeader/KusaHeader";
import { default as chartbar } from "../../assets/home/chart-bar.svg";
import { default as message } from "../../assets/chat/message.svg";
import { KusaLoadingSpinner } from "../../components/Kusa/KusaSpinner/KusaLoadingSpinner";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { KusaChatBox } from "../../components/Kusa/KusaChat/KusaChatBox";
import { KusaChatMenu } from "../../components/Kusa/KusaChat/KusaChatMenu";
import axios from "axios";
import Conversation from "../../components/Chat/Conversation";
import Message from "../../components/Chat/Message";
import ChatOnline from "../../components/Chat/ChatOnline";


const theme = {
    axis: {
        fontSize: "20px",
        ticks: {
            text: {
                fill: "#ffffff",
            },
        },
        legend: {
            text: {
                fill: "#aaaaaa",
            },
        },
    },
};

export const Chat: React.FC = () => {
    const [loading, setLoading] = React.useState(false);
    const iconHeight = 40;
    const { darkMode } = React.useContext(UserContext);

    return (
        <Container sx={{ maxWidth:'100%'  }} maxWidth={false}>
            <KusaLoadingSpinner loading={loading} />
            <div className="Chat">
                {/* chatMenu */}
                <KusaChatMenu>
                    <div className="chatMenuWrapper">
                        <input placeholder="Search for friends" className="chatMenuInput" />
                        <Conversation></Conversation>
                        <Conversation></Conversation>
                        <Conversation></Conversation>
                        <Conversation></Conversation>
                        <Conversation></Conversation>
                        <Conversation></Conversation>
                        <Conversation></Conversation>
                        <Conversation></Conversation>
                    </div>
                </KusaChatMenu>

                {/* chatBox */}
                <KusaChatBox>
                    <div className="chatBoxWrapper">
                        <div className="chatBoxTop">
                            <Message own={false}/>
                            <Message own={true}/>
                            <Message own={false}/>
                            <Message own={false}/>
                            <Message own={false}/>
                            <Message own={true}/>
                            <Message own={true}/>
                            <Message own={true}/>
                        </div>
                        <div className="chatBoxBottom">
                            <textarea
                                className="chatMessageInput"
                                placeholder="write something..."
                            >
                            </textarea>
                            <button className="chatSubmitButton"> Send </button>
                        </div>
                    </div>  
                </KusaChatBox>

                {/* chatOnline */}
                <KusaChatMenu>
                    <div className="chatOnlineWrapper">
                        <ChatOnline></ChatOnline>
                    </div>
                </KusaChatMenu>
            </div>
        </Container>
    );
};
