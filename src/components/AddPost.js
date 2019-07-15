import React, { Component } from "react";

export default class AddPost extends Component {
  state = {
    title : '',
    body :''
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addPost(this.state);
    this.setState({ body: "" , title: ""});
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Title:</label>
          <input
            type="text" id="title"
            onChange={this.handleChange}
            value={this.state.title}
          />
          <label>Add a new post:</label>
          <input
            type="text" id="body"
            onChange={this.handleChange}
            value={this.state.body}
          />
          <button type="submit" onClick={this.handleSubmit}>Post</button>
        </form>
      </div>
    );
  }
}
