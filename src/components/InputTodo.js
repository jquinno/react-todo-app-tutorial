import React, { Component } from "react"

class InputTodo extends Component {
    state = {
        title: ""
    };

    onChange = e => {
        this.setState({
            // Passing a value to the title 
            // title: e.target.value
            [e.target.name]: e.target.value
        }
        
        );};

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.title.trim()){
            console.log(this.state.title);
            this.props.addTodoProps(this.state.title);
            this.setState({
                title: "" 
            })
        } else {
            alert("Please Write Item")
        }

    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Add Todo..." value={this.state.title} name="title" onChange={this.onChange}/>
            <button>Submit</button>
            </form>
        )
    }
}
export default InputTodo