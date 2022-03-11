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
import { UserContext } from "../../contexts/UserContext/UserContext";
import { BACKEND_URL } from "../../constants/backendURL";
import axios from "axios";

export const Chat: React.FC = () => {
    const iconHeight = 50;
    const [conversations, setConversations] = React.useState([]);
    const [currentChat, setCurrentChat] = React.useState(null);
    const [messages, setMessages] = React.useState<Array<any>>([]);
    const [newMessage, setNewMessage] = React.useState("");
    const { userId } = React.useContext(UserContext);
    
    React.useEffect(() => {
        const getConversation = async () => {
            try {
                const res = await axios.get(`${BACKEND_URL}/getConversation/` + userId);
                setConversations(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getConversation();
    }, [userId]);
    
    React.useEffect(() => {
        const getMessages = async () => {
            try {
                const res = await axios.get(`${BACKEND_URL}/getMessage/` + currentChat!['_id']);
                setMessages(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getMessages();
    }, [currentChat]);
    
    const handleSubmit = async (e: { preventDefault: any }) => {
        const message = {
            conversationID: currentChat!['_id'],
            senderID: userId,
            text: newMessage,
        };

        try {
            const res = await axios.post(`${BACKEND_URL}/addMessage/`, JSON.stringify(message));
            console.log(message);
            setMessages([...messages, res.data]);
            setNewMessage("");
        } catch (err) {
            console.log(err);
        }
    };

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
                        {conversations.map((c)=> (
                            <div onClick={()=>setCurrentChat(c)}>
                                <Conversation conversation={c} currentUser={userId}/>
                            </div>
                        ))}
                    </div>
                </KusaChatMenu>

                {/* chatBox */}
                <KusaChatBox>
                    <div className="chatBoxWrapper">
                        {currentChat ? (
                            <>
                            <div className="chatBoxTop">
                                {messages.map((m)=> (
                                    <Message messages={m} own={m['senderID'] === userId}/>
                                ))}
                            </div>
                            <div className="chatBoxBottom">
                                <textarea
                                    className="chatMessageInput"
                                    placeholder="write something..."
                                    onChange={(e)=>setNewMessage(e.target.value)}
                                    value={newMessage}
                                    >
                                </textarea>
                                {/* <button className="chatSubmitButton"> */}
                                <button className="chatSubmitButton" onClick={handleSubmit}>
                                 Send 
                                </button>
                        
                            </div>
                            </>) : (
                            <span className="noConversationText">
                                Click on a user to start a chat.
                            </span>)}  
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

