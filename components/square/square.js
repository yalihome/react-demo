import React,{Component} from "react";
import squareStyle from "./square.less";

class Square extends Component{
    render(){
        return <button onClick={ function(){ alert("click") } } className="square">{this.props.value}</button>
    }
}

export default Square;