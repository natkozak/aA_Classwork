import TodoDetailView from "./todo_detail";
import { connect } from 'react-redux';
import { receiveStep, removeStep } from "../../actions/step_actions.js"



const mapDispatchToProps = dispatch => {
  return ({
    receiveTodo: todo => dispatch(receiveTodo(todo)),
    removeTodo: todo => dispatch(removeTodo(todo))
  });
}


export default connect(null, mapDispatchToProps)(TodoDetailView);