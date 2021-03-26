import React from 'react';

class TodoDetailView extends React.Component {
  constructor(props){
    super(props);

    this.removeItem = this.removeItem.bind(this);
  }

  removeItem(e) {
    e.preventDefault();
    this.props.removeTodo(this.props.todo);
  }

  render(){
    return (
      <div>
        <p>{this.props.todo.body}</p>
        <button type="submit" onClick={this.removeItem}>
          Remove Todo
        </button>
      </div>
    )
  }
}

export default TodoDetailView;