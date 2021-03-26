import React from 'react';
import TodoDetailView from './../todo_detail/todo_detail_view';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    // this.toggleDone = this.toggleDone.bind(this);
    this.markDone = this.markDone.bind(this);
    this.markUndone = this.markUndone.bind(this);
    this.removeItem = this.removeItem.bind(this);

    this.detail = false;
    
  }

  
  markDone(e) {
    e.preventDefault();
    let newState = Object.assign(this.props.todo);
    newState["done"] = true;
    this.props.receiveTodo(newState);
  } 

  markUndone(e) {
    e.preventDefault();
    let newState = Object.assign(this.props.todo);
    newState["done"] = false;
    this.props.receiveTodo(newState);
  }

  removeItem(e) {
    e.preventDefault();
    this.props.removeTodo(this.props.todo);
  }

  render () {
    return (
      <li>
        <div>{this.props.todo.title}</div>
        <TodoDetailView todo={this.props.todo} removeTodo={this.props.removeTodo}/>
        {/* <button type="submit" onClick={this.removeItem}>
          Remove Todo
        </button> */}
        <button type="submit" onClick={this.markDone}>
          Mark Done
        </button>
        <button type="submit" onClick={this.markUndone}>
          Mark Undone
        </button>
      </li>
    );
  }
}

export default TodoListItem;