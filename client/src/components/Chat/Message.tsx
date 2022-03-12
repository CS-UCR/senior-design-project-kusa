import "../../components/Chat/Message.css";
import {format} from "timeago.js"
import axios from "axios";
import {default as loading} from "../../assets/chat/loading.gif";
import React, { useEffect } from "react";
import { BACKEND_URL } from "../../constants/backendURL";

export default function Message(messages: any, own: boolean) {
  const [user, setUser] = React.useState(null);

  useEffect(()=>{
    const getUser = async () => {
      try {
        const res = await axios(`${BACKEND_URL}/searchForFriend/` + messages.messages.senderID);
        setUser(res.data[0]);
        console.log(messages.messages.senderID);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
}, [messages, own]);


  return (
    <div className={messages.own ? "message own" : "message"}>
        <div className="messageTop">
        <img
            className="messageImg"
            // src="https://www.egames.news/__export/1643581808590/sites/debate/img/2022/01/30/my_dress-up_darling_x3x.jpg_242310155.jpg"
            src={user ? user!['avatar'] : loading}
            alt=""
        />
        <p className="messageText"> 
          {messages.messages.text}
        </p>
        </div>
        <div className="messageBottom">{format(messages.messages.timestamp)}</div>
    </div>
  );
}
