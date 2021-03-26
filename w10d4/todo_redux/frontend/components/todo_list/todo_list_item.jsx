import React from 'react';


class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    // this.toggleDone = this.toggleDone.bind(this);
    this.markDone = this.markDone.bind(this);
    this.markUndone = this.markUndone.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  // toggleDone(e) {
  //   e.preventDefault();
  //   console.log(this.props.todo.done);
  //   if (this.props.todo.done) {
  //     this.setState({done: false})
  //   } else {
  //     this.setState({done: true})
  //   }
  // }
  
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
        {this.props.todo.title}
        {this.props.todo.body}
        {this.props.todo.done}
        <button type="submit" onClick={this.removeItem}>
          Remove Todo
        </button>
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