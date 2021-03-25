
export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';



export const receiveTodos = (todos) => {
  return { // technically we don't need the return
    type: RECEIVE_TODOS,
    todos: todos,
  };
};

export const receiveTodo = (todo) => {
  return { // technically we don't need the return
    type: RECEIVE_TODO,
    todo: todo,
  };
};