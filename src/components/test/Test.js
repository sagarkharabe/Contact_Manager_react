import React, { Component } from "react";

export default class Test extends Component {
  componentDidMount() {
    console.log("Test loaded");
  }

  componentDidMount() {
    console.log("Component will ");
  }

  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    );
  }
}
