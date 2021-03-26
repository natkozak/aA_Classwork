import React from 'react';
import TodoListItem from "./../todo_list/todo_list_item";
import TodoForm from "./../todo_list/todo_form";

class TodoList extends React.Component {
  render() {
    console.log(this.props);
    const items = this.props.todos.map(todo => {
      return <TodoListItem todo={todo} key={todo.id}/>
    })
    return (
      <div>I am a Todo List
        <ul>
          {/* {this.props.todos.map(todo => <li key={todo.id}>Title: {todo.title}</li>)} */}
          {items}
        </ul>
        <h1>Todo Form</h1>
        <ul>
          <TodoForm receiveTodo={this.props.receiveTodo}/>
        </ul>
      </div>
    )
  }
}

export default TodoList;

// import React from 'react';

// const TodoList = (props) => {
//   return (
//     <div> <h1>I am a Todo List</h1>
//       <ul>
//         {props.todos.map(todo => <li>Title: {todo.title}</li>)}
//       </ul>
//     </div>
//   )
// }

// export default TodoList;