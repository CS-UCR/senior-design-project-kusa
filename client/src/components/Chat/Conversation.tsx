import "../../components/Chat/Conversation.css";
import React from 'react';
import { UserContext } from "../../contexts/UserContext/UserContext";

export default function Conversation() {
  const { darkMode } = React.useContext(UserContext);
  return (
    <div className="conversation">
      <img className="conversationImg"
        src="https://www.egames.news/__export/1643581808590/sites/debate/img/2022/01/30/my_dress-up_darling_x3x.jpg_242310155.jpg"
        alt=""
      />
      <span className="conversationName">
        test 1
      </span>
    </div>
  );
}
