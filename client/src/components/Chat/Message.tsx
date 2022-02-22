import "../../components/Chat/Message.css";

export default function Message({own}:{own:any}) {
  return (
    <div className={own ? "message own" : "message"}>
        <div className="messageTop">
        <img
            className="messageImg"
            src="https://www.egames.news/__export/1643581808590/sites/debate/img/2022/01/30/my_dress-up_darling_x3x.jpg_242310155.jpg"
            alt=""
        />
        <p className="messageText"> hiii it's marin</p>
        </div>
        <div className="messageBottom">Timestamp</div>
    </div>
  );
}
