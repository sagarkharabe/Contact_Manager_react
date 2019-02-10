import React, { Component } from 'react'
import Contact from './Contact'
import uuid from 'uuid'
export default class Contacts extends Component {
  constructor(props){
    super(props);
    this.state = {
      contacts : [
        {
          id : uuid(),
          name : 'John',
          email : 'john@yahoo.com',
          phone : '333-555-2454'
        },
        {
          id : uuid(),
          name : 'Tarun',
          email : 'tarun@google.com',
          phone : '453-555-2454'
        },  
        {
          id : uuid(),
          name : 'Karen',
          email : 'karen@gmail.com',
          phone : '983-555-2454'
        },
        {
          id : uuid(),
          name : 'Brad Traversy',
          email : 'Brad@gmail.com',
          phone : '883-555-2454'
        }
      ]
    }
  }
  delContact = (id) => {
    this.setState({
      contacts :this.state.contacts.filter(contact => contact.id !== id)
    })
  }
  
  render() {
    const {contacts} = this.state
    return (
     <React.Fragment>
        {contacts.map(contact => 
          <Contact key={contact.id} id={contact.id} delCon ={(id) => this.delContact(id)}name={contact.name} email={contact.email} phone={contact.phone}/>
        )}
        </React.Fragment>
     
    )
  }
}
