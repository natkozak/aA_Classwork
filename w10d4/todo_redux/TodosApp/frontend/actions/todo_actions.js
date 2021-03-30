import * as APIUtil from './../util/todo_api_util';


export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';




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

export const removeTodo = (todo) => {
  return {
    type: REMOVE_TODO,
    todo: todo,
  };
};

export const fetchTodos = () => (dispatch) => {
  return APIUtil.fetchTodos().then(() => dispatch(receiveTodos()));
}

//export const createTea2 = (tea) => (dispatch) => {
// return TeaAPIUtil.createTea(tea).then(tea => dispatch(receiveTea(tea)));
// }