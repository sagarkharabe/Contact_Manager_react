import React, { Component } from "react";
import Header from "./components/layouts/Header";
import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/AddContact";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./context";
class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header />
          <div className="container">
            <AddContact />
          </div>
          <div className="container">
            <Contacts />
          </div>{" "}
        </div>{" "}
      </Provider>
    );
  }
}

export default App;
