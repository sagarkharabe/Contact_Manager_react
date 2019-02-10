import React, { Component } from 'react'
import Contact from './Contact'
import {Consumer} from '../context'
export default class Contacts extends Component {

  delContact = (id) => {
    this.setState({
      contacts :this.state.contacts.filter(contact => contact.id !== id)
    })
  }
  
  render() {
    return (
      <Consumer>
        {value => {
           const {contacts} = value
          return (
            <React.Fragment>
          {contacts.map(contact => 
          <Contact key={contact.id} id={contact.id} delCon ={(id) => this.delContact(id)}name={contact.name} email={contact.email} phone={contact.phone}/>
        )}
        </React.Fragment>
          )
        }}
      </Consumer>
    )
   
  
  }
}
