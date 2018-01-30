import EventEmitor from 'events';
import dispatcher from '../dispatcher';

class TodoStore extends EventEmitor{
  constructor(){
    super();
    this.createTodo = this.createTodo.bind(this);
    this.handleActions = this.handleActions.bind(this);
    this.todos=[
      {
        id: 1,
        text: 'amit'
      }
    ]
  }

  getTodos(){
    return this.todos;
  }

  createTodo(text){
    console.log("action.text",text)
    this.todos.push({
      id: Date.now(),
      text,
    });
    this.emit("change");
  }

  handleActions(action){

    switch(action.type){
    case 'CREATE_TODO':
      this.createTodo(action.text);
      break;
    }
    console.log('xxxxxxx',action)
  }
}
const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));
export default todoStore
window.todoStore = todoStore
