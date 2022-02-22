import * as React from "react";
import {
    Container,
} from "@mui/material";
import "../../pages/Chat/Chat.css";
import { KusaHeader } from "../../components/Kusa/KusaHeader/KusaHeader";
import { default as message } from "../../assets/chat/message.svg";
import { KusaChatBox } from "../../components/Kusa/KusaChat/KusaChatBox";
import { KusaChatMenu } from "../../components/Kusa/KusaChat/KusaChatMenu";
import Conversation from "../../components/Chat/Conversation";
import Message from "../../components/Chat/Message";
import ChatOnline from "../../components/Chat/ChatOnline";

export const Chat: React.FC = () => {
    const iconHeight = 50;

    return (
        <Container sx={{
            maxWidth:'100%',
            maxHeight: '80%',}}
            maxWidth={false}>

            <div className="Chat">
                {/* chatMenu */}
                <KusaChatMenu>
                    <KusaHeader styles={{
                        marginTop: "1rem",
                        marginLeft: "auto",
                        marginRight: "auto",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        }}>
                        <img
                            src={message}
                            alt="message"
                            height={iconHeight}
                            width={iconHeight}
                            style={{ marginRight: ".8rem" }}
                        />
                        chats
                    </KusaHeader>
                    <div className="chatMenuWrapper">
                        <input
                            placeholder="Search for friends"
                            className="chatMenuInput"
                        />
                        <Conversation></Conversation>
                        <Conversation></Conversation>
                        <Conversation></Conversation>
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
