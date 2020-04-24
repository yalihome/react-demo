import React from 'react';
import ReactDOM from "react-dom";
import App from "./app";
import Game from "../components/game/game";
import styleSheet from "./style.less";
import { Router, Route, Link } from "react-router";
import Clock from "../components/clock/clock";
import Form from "../components/form/form";

let name = "Josh Perez";
var element = <h1>Hello, {name}</h1>;

//组件需要全部引入页面，组件的样式怎么破

function withdraw(account, amount) {
    account.total -= amount;
    console.log(account);
  }

  withdraw({total: 10}, 5);

function tick() {
    let formData = {
        name: "katy",
        desc: "我是小可爱",
        hobby: "running",
        checked: true
    };
    let form = React.createRef();  //肯定用到了Symbol
    var page = ReactDOM.render(
        <div>
            <div className="row">
                {/* 初始化 */}
                <Form ref={form} value={formData.name} text={formData.desc} hobby={formData.hobby} checked={formData.checked}/>
            </div>
            <div className="row">
                <App /><Game />
            </div>
            <div className="row">
                <Clock/>
            </div>
            <div className="row">
            </div>
        </div>,
        // element,
        document.getElementById("root")
    )
}

tick();

// setInterval(tick , 1000);
