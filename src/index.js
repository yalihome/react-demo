import React from 'react';
import ReactDOM from "react-dom";
import App from "./app";
import Game from "../components/game/game";
import styleSheet from "./style.less";
import { Router, Route, Link } from "react-router";

//组件需要全部引入页面，组件的样式怎么破
var page = ReactDOM.render(
    <div>
        <App/>
        <Game/>
    </div>,
    document.getElementById("root")
)

console.log(page);