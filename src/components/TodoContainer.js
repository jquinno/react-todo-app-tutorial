import React from "react"
import TodoList from "./TodoList"
import Header from "./Header"
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";

class TodoContainer extends React.Component {

  state = {
    todos: [
      {
        id: 1,
        title: "Setup development environment",
        completed: true
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false
      }
    ]
   };

  //  handleChange = id => {
  //   this.setState({
  //     todos: this.state.todos.map(todo => {
  //       if (todo.id === id) {
  //         todo.completed = !todo.completed;
  //       }
  //       return todo;
  //     })
  //   });};

  handleChange = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          } 
        }
      return todo
      }),
    }))
  };

  addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    };  this.setState({
      todos: [...this.state.todos, newTodo]  });
  };

  delTodo = id => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id !== id;
        })
      ]
    });
  };

  render() {
    return (
      <div>
        <Header />
        <InputTodo addTodoProps={this.addTodoItem} />
        <TodoList todos={this.state.todos}
        handleChangeProps={this.handleChange}
        deleteTodoProps={this.delTodo}
        
        /> 
      </div>
    )
  }
}
export default TodoContainer