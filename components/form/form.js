import React, { Component } from "react";
import FancyButton from "../fancybutton/fancybutton";

class Form extends Component {
    constructor(props) {
        console.log("form property:");
        console.log(props);
        super(props);
        this.state = Object.assign({}, props);
        this.input = React.createRef();
        this.btn = React.createRef();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleCheckChange = this.handleCheckChange.bind(this);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <FancyButton ref={this.btn}>Click Me!</FancyButton>
                <div>
                    <label>电话:
                        <input type="text" ref={this.input}/>
                    </label>
                </div>

                <div>
                    <label>名字:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                </div>

                <div>
                    {/* type="text" value={this.state.value} onChange={this.handleChange} */}
                    <label>描述:<textarea value={this.state.text} onChange={this.handleTextChange}></textarea></label>
                </div>

                <div>
                    <select value={this.state.hobby} onChange={this.handleSelectChange}>
                        <option value="running">running</option>
                        <option value="swiming">swiming</option>
                        <option value="walking">walking</option>
                        <option value="writing">writing</option>
                    </select>
                </div>

                <div>
                    <input type="checkbox" checked={this.state.checked} onChange={this.handleCheckChange} />
                </div>

                <div>
                    <input type="submit" value="提交" />
                </div>
            </form>
        )
    }

    handleChange(e) {
        //动态添加了一个之前没有定义过的 state
        this.setState({
            value: e.target.value,
            test: "test"
        });
    }

    handleSubmit(e) {
        // console.log("提交的名字:" + this.state.value);
        // console.log("提交的描述:" + this.state.text);
        e.preventDefault();
        // ref 是什么
        // console.log(this.input);
        // console.log(this.input.current.value);
        console.log(this.btn.current);
    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    handleSelectChange(e) {
        this.setState({
            hobby: e.target.value
        })
    }

    handleCheckChange(e) {
        console.log(e.target.checked);
        this.setState({
            checked: e.target.checked
        })
    }
}

export default Form;