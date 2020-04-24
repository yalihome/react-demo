import Userinfo from "../userinfo/userinfo";

function formateDate(ts){
    
}

function Comment(props){
    return <div className="comment">
        <Userinfo user={props.user}/>
        <div className="comment-text">
            {props.text}
        </div>
        <div className="comment-date">
            {formateDate(props.date)}
        </div>
    </div>
}

export default Comment;