import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layouts/TextInputGroup";
import uuid from "uuid";
export default class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
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
    const { name, email, phone } = this.state;

    if (name === "") {
      this.setState({
        errors: { name: "Name is Required." }
      });
      return;
    }
    if (email === "") {
      this.setState({
        errors: { email: "Email is Required." }
      });
      return;
    }
    if (phone === "") {
      this.setState({
        errors: { phone: "Phone is Required." }
      });
      return;
    }
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
      phone: "",
      errors: {}
    });
    this.props.history.push("/");
  };
  render() {
    const { name, email, phone, errors } = this.state;

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
                    error={errors.name}
                  />
                  <TextInputGroup
                    name={"email"}
                    label={"Email :"}
                    value={email}
                    placeholder={"Enter email .."}
                    type={"email"}
                    onchange={this.handleChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    name={"phone"}
                    label={"Phone Number :"}
                    value={phone}
                    placeholder={"Enter phone .."}
                    type={"tel"}
                    onchange={this.handleChange}
                    error={errors.phone}
                  />
                  <div className="container text-center">
                    <input
                      type="submit"
                      value="Add Contact"
                      className="btn btn-primary btn-lg "
                    />
                  </div>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
