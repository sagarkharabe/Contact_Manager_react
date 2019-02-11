import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layouts/TextInputGroup";
import uuid from "uuid";
export default class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };
  onSubmit = (dispatch, e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_CONTACT",
      payload: {
        ...this.state,
        id: uuid()
      }
    });
    this.setState({
      name: "",
      email: "",
      phone: ""
    });
  };
  render() {
    const { name, email, phone } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    name={"name"}
                    label={"Name :"}
                    value={name}
                    placeholder={"Enter name .."}
                    type={"text"}
                    onchange={this.handleChange}
                  />
                  <TextInputGroup
                    name={"email"}
                    label={"Email :"}
                    value={email}
                    placeholder={"Enter email .."}
                    type={"email"}
                    onchange={this.handleChange}
                  />
                  <TextInputGroup
                    name={"phone"}
                    label={"Phone Number :"}
                    value={phone}
                    placeholder={"Enter phone .."}
                    type={"tel"}
                    onchange={this.handleChange}
                  />

                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-block btn-primary"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
