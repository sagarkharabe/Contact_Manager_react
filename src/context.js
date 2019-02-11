import React from "react";
import uuid from "uuid";
const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};
export class Provider extends React.Component {
  state = {
    contacts: [
      {
        id: uuid(),
        name: "John",
        email: "john@yahoo.com",
        phone: "333-555-2454"
      },
      {
        id: uuid(),
        name: "Tarun",
        email: "tarun@google.com",
        phone: "453-555-2454"
      },
      {
        id: uuid(),
        name: "Karen",
        email: "karen@gmail.com",
        phone: "983-555-2454"
      },
      {
        id: uuid(),
        name: "Brad Traversy",
        email: "Brad@gmail.com",
        phone: "883-555-2454"
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
