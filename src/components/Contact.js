import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Contact extends Component {

  render() {
    return (
      <div className="card card-body mb-3">
        <h4>{this.props.name} 
        <i className="fas fa-sort-down"> </i>
        </h4>
        <ul className = "list-group">
          <li className = "list-group-item">{this.props.email}</li>
          <li className = "list-group-item">{this.props.phone}</li>
        </ul>
      </div>
    )
  }
}
Contact.propType = {
  name : PropTypes.string.isRequired,
  email : PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
}
export default Contact
