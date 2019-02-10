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
        }
      ]
    }
  }
  render() {
    const {contacts} = this.state
    return (
      <div>
        {contacts.map(contact => 
          <Contact key={contact.id}name={contact.name} email={contact.email} phone={contact.phone}/>
        )}
        
      </div>
    )
  }
}
