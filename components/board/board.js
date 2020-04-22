import React,{ Component } from "react";
import Square from "../square/square";
import boardStyle from "./board.less";

class Board extends Component{
    renderSquare(i){
        return <Square value={i}/>
    }
    //类似 v-if、v-show、v-for 怎么实现
    render(){
        let status = "Next player: X";
        return <div className="board">
            <div className="status">{status}</div>
            <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
            </div>
            <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
            </div>
            <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
            </div>
        </div>
    }
}

export default Board;