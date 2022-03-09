import "../../components/Chat/Message.css";
import {format} from "timeago.js"

export default function Message(messages: any, own: boolean) {

  return (
    <div className={messages.own ? "message own" : "message"}>
        <div className="messageTop">
        <img
            className="messageImg"
            src="https://www.egames.news/__export/1643581808590/sites/debate/img/2022/01/30/my_dress-up_darling_x3x.jpg_242310155.jpg"
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
