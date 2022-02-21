import "../../components/Chat/ChatOnline.css";
import React from 'react';
import { UserContext } from "../../contexts/UserContext/UserContext";

export default function ChatOnline() {
  const { darkMode } = React.useContext(UserContext);
  return (
    <div className="chatOnline">
        <div className="chatOnlineFriend">
          <div className="chatOnlineImgContainer">
            <img
              className="chatOnlineImg"
              src={
                "https://www.egames.news/__export/1643581808590/sites/debate/img/2022/01/30/my_dress-up_darling_x3x.jpg_242310155.jpg"
              }
              alt=""
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">test 1</span>
        </div>
    </div>
  );
}
