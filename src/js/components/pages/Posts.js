import React from "react";
import TodoStore from "../../stores/TodoStore";
import * as TodoActions from "../../actions/TodoActions";
export default class Posts extends React.Component {
  constructor(){
    super();
    this.getTodos = this.getTodos.bind(this);
    this.state ={
      todos: TodoStore.getTodos()
    }
  }

  componentWillMount(){
    TodoStore.on('change',this.getTodos);
  }
  
  componentWillUnmount() {
    TodoStore.removeListener("change", this.getTodos);
  }

  getTodos(){
    this.setState({todos: TodoStore.getTodos()})
  }
  createTodo(){
    if(this.refs.todoText.value){
      TodoActions.createTodo(this.refs.todoText.value);
      this.refs.todoText.value = ""
    }
  }
  render() {
    console.log(this.state.todos)
    var todos = this.state.todos.map(function(todo){
      return <li key={todo.id}>{todo.text}</li>
    })
    return (
      <div>
        {todos}
        <input type="text" ref="todoText"></input>
        <button type="button" onClick={this.createTodo.bind(this)}> Add Todo </button>
      </div>
    );
  }
}
