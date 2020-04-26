import React,{Component} from "react";


function ErrorComponent(){
    return (
        <div>{Math.random()>0.2?"没有错误":(new Error("自定义错误！！！").toString())}</div>
    );
}


export default ErrorComponent;