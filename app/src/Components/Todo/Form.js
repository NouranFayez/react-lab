import React from 'react';
import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4';

import { addTodo } from '../../actions/todo';

 class TodoForm extends React.Component {
  state = {
    text: '',
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ text: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    debugger;
    if (!this.state.text) return;
    const todo = {
      text: this.state.text, completed: false, deleted: false, id: uuidv4(),
    };
    this.props.addTodo(todo);
    this.setState({ text: '' });
    debugger;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} value={this.state.text} />
        <button type="submit">Add</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo)),
});

export default connect(null, mapDispatchToProps)(TodoForm);
