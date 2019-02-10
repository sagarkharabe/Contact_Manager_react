import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Contact extends Component {
  constructor(props){
    super(props); 
    this.state = {
      showDetails : false,
      arrow : "fas fa-sort-down"
     }
  }
  
    click = (e) => {
      console.log(e.target)
      this.setState({
        showDetails : !this.state.showDetails,
        arrow : !this.state.showDetails ? "fas fa-sort-up" : "fas fa-sort-down"
      })
   
      
    }

  render() {
    return (
      <div className="card card-body mb-3 py-auto">
        <h4>{this.props.name} {' '}
         <i onClick={this.click} style={{cursor:'pointer'}} className={this.state.arrow}> </i>
         <button onClick={this.props.delCon.bind(this,this.props.id)} className="btn btn-danger" style={{float:'right'}}>&times;</button>
        </h4>
        { this.state.showDetails ?
          (
          <div className = "container mb-3">
           <ul className = "list-group">
            <li className = "list-group-item"> 
            Email :{this.props.email}</li>
            <li className = "list-group-item">
            Phome :{this.props.phone}</li>
          </ul> 
         </div>
          ) : null
          
        }
        
      </div>
    )
  }
}
Contact.propType = {
  name : PropTypes.string.isRequired,
  email : PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  delCon : PropTypes.func.isRequired
}
export default Contact
