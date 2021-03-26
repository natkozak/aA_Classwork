import React from 'react';
import {uniqueId} from './../../util/util';

class TodoForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      id: uniqueId(),
      title: "",
      body: "",
      done: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();

    this.props.receiveTodo(this.state);

    this.setState({
      id: uniqueId(),
      title: "",
      body: "",
      done: false
    })
  }

  updateTitle(e) {
    this.setState({title: e.target.value})
  }

  updateBody(e) {
    this.setState({body: e.target.value })
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Title:
          <input type="text" value={this.state.title} onChange={this.updateTitle}/>
        </label>

        <label>Body:
          <input type="text" value={this.state.body} onChange={this.updateBody}/>
        </label>

        {/* <label>Done?
          <input type="radio" name="" value="" />
        </label> */}

        <input type="submit" value="Add New Todo" />

      </form>
    )
  }
}

export default TodoForm;