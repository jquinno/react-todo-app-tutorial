import React from "react"
import Card from 'react-bootstrap/Card';

class TodoItem extends React.Component {
  render() {
    return (
        <li>
            <input
                type="checkbox"
                checked={this.props.todo.completed}
                onChange={() => this.props.handleChangeProps(this.props.todo.id)}
            />

            <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>  Delete
            </button>
            {this.props.todo.title}
        </li>

        // <Card>
        //     <Card.Body>
        //         <Card.Title>
        //             {this.props.todo.title}
        //         </Card.Title>
        //     </Card.Body>
        // </Card>
    )
  }
}
export default TodoItem