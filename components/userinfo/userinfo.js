import Avator from "../avator/avator";

function Userinfo(props) {
    return <div className="userinfo">
        <Avator user={props.user} />
        <div className="userinfo-name">
            {props.user.name}
        </div>
    </div>
}

export default Userinfo;