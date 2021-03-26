import React from 'react';

class TodoList extends React.Component {
  render() {
    return (
      <div>I am a Todo List
        <ul>
          {this.props.todos.map(todo => {
            <li key={todo.id}>
              Title: {todo.title}
            </li>
          })}
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