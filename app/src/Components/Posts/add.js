import React from 'react';
import SimpleSchema from 'simpl-schema';
import axios from 'axios';

export default class AddPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      userId: '',
      errors: [],
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, body, userId } = this.state;
    const validationContext = new SimpleSchema({
      title: {
        type: String,
        optional: false,
      },
      body: String,
      userId: SimpleSchema.Integer,
    }).newContext();
    validationContext.validate({ title, body, userId: +userId });
    if (validationContext.isValid()) {
      axios.post('https://jsonplaceholder.typicode.com/posts', { title, body, userId: +userId })
        .then((response) => {
          // handle success
          console.log(response);
          this.props.history.push("/posts/");
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    }
    this.setState({ error: validationContext.validationErrors() });
    console.log(validationContext.validationErrors());
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="title" onChange={this.handleChange} value={this.state.title} />
          <input type="text" name="body" onChange={this.handleChange} value={this.state.body} />
          <input type="number" name="userId" onChange={this.handleChange} value={this.state.userId} />
          <button type="submit">Submit</button>
        </form>
        <div>
          {
          this.state.errors.length
            ? this.state.errors.map(e => (
              <h3>
                {e.name}
                {' '}
                is not valid
              </h3>
            ))
            : <h3>No Errors</h3>
        }
        </div>
        </>
    );
  }
}
