import axios from "axios";
import React, { useEffect } from "react";
import "../../components/Chat/Conversation.css";
import { BACKEND_URL } from "../../constants/backendURL";
import { UserContext } from "../../contexts/UserContext/UserContext";
import {default as loading} from "../../assets/chat/loading.gif";

export default function Conversation(conversation: any, currentUser: string) {

  const { userId } = React.useContext(UserContext);
  const [user, setUser] = React.useState(null);
  var friendID: any;
  useEffect(()=>{
    const tempArr = conversation.conversation.members.split(',');
    var members: string[] = [];
    tempArr.forEach((a: String) => {
      const regex = /\d+/
      const id = a.match(regex);
      members.push(id![0]);
    });

    friendID = members.find((m: any) => m !== userId);
    const getUser = async () => {
      try {
        const res = await axios(`${BACKEND_URL}/searchForFriend/` + friendID);
        setUser(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
}, [currentUser, conversation]);


  return (
    <div className="conversation">
      <img className="conversationImg"
        src={user ? user!['avatar'] : loading}
        alt=""
      />
      <span className="conversationName">
        {user ? user!['personaname'] : 'loading...'}
      </span>
    </div>
  );
}
