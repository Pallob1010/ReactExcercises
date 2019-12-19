import React, { Component } from "react";

export class FormAction extends Component {
  state = {
    name: null,
    roll: null,
    dept: null
  };
  handleChange = e => {
    // console.log(e.target.id, e.target.value);
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={this.handleChange} />
          <label htmlFor="roll">Roll:</label>
          <input type="text" id="roll" onChange={this.handleChange} />
          <label htmlFor="dept">Department:</label>
          <input type="text" id="dept" onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default FormAction;
