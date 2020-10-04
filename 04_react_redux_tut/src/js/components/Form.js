// src/js/components/Form.js
import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle } from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
}
// or https://react-redux.js.org/using-react-redux/connect-mapdispatch#defining-mapdispatchtoprops-as-an-object
// recommended syntax (my attempt here might be wrong)
// const mapDispatchToProps = {
//   addArticle
// }

class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    this.props.addArticle({ title });
    this.setState({ title: "" });
  }
  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <p>NB this form currently has no unique ID for articles</p>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">SAVE</button>
      </form>
    );
  }
}

const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default Form;
