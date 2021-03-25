
import { RECEIVE_TODOS } from '../actions/todo_actions';
import { RECEIVE_TODO } from '../actions/todo_actions';

const todosReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_TODOS:
      nextState[action.todo.id] = action.todo;
      return nextState;
    case RECEIVE_TODO: // Is this the same as above?
      nextState[action.todo.id] = action.todo;
      return nextState;
    default:
      return state;
  }
}

export default todosReducer;