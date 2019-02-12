import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";
export default class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h2 className="display-3 mb-2">
                <span className="text-info">Contacts</span>
              </h2>
              {contacts.map(contact => (
                <Contact
                  key={contact.id}
                  id={contact.id}
                  name={contact.name}
                  email={contact.email}
                  phone={contact.phone}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
