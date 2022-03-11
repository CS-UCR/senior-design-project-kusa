import "../../components/Chat/Message.css";
import {format} from "timeago.js"
import axios from "axios";
import React, { useEffect } from "react";
import { BACKEND_URL } from "../../constants/backendURL";
import { UserContext } from "../../contexts/UserContext/UserContext";

export default function Message(messages: any, own: boolean) {
  const { userId } = React.useContext(UserContext);
  const [user, setUser] = React.useState(null);
  var friendID: any;

  useEffect(()=>{
    const getUser = async () => {
      try {
        if (!messages.own) {
          friendID = messages.senderID;
        }
        else {
          friendID = userId;
        }
        const res = await axios(`${BACKEND_URL}/searchForFriend/` + friendID);
        setUser(res.data[0]);
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
            src={user ? user!['avatar'] : "https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif"}
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
