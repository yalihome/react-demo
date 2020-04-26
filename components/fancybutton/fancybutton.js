import React, { Component } from "react";


const FancyButton = React.forwardRef((props, ref)=>{
    {console.log(props)}
    <button ref={ref}>
        {props.children}
    </button>
});


export default FancyButton;