import React, { Component } from "react";
import Board from "../board/board";
import gameStyle from "./game.less";

class Game extends Component{
    render(){
        return (
            <div className="game">
                <div className="game-board">
                    <Board/>
                </div>
                <div className="game-info">

                </div>
            </div>
        )
    }
}

export default Game;