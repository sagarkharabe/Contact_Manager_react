import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layouts/TextInputGroup";

import axios from "axios";
export default class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const contact = res.data;
    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone
    });
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  onSubmit = async (dispatch, e) => {
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

    const { id } = this.props.match.params;
    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      {
        name,
        email,
        phone
      }
    );

    dispatch({
      type: "EDIT_CONTACT",
      payload: {
        ...this.state,
        id: res.data.id
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
              <div className="card-header">Edit Contact</div>
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
                      value="Update Contact"
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
