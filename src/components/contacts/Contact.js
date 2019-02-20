import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Consumer } from "../../context";
import axios from "axios";
export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
      arrow: "fas fa-sort-down"
    };
  }

  click = e => {
    this.setState({
      showDetails: !this.state.showDetails,
      arrow: !this.state.showDetails ? "fas fa-sort-up" : "fas fa-sort-down"
    });
  };
  delCon = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };
  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3 py-auto">
              <h4>
                {this.props.name}{" "}
                <i
                  onClick={this.click}
                  style={{ cursor: "pointer" }}
                  className={this.state.arrow}
                >
                  {" "}
                </i>
                <button
                  onClick={this.delCon.bind(this, this.props.id, dispatch)}
                  className="btn btn-danger"
                  style={{ float: "right" }}
                >
                  &times;
                </button>
                <Link to={`contact/edit/${this.props.id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "ponter",
                      float: "right",
                      color: "black",
                      marginRight: "1rem",
                      marginTop: "3px"
                    }}
                  />
                </Link>
              </h4>
              {this.state.showDetails ? (
                <div className="container mb-3">
                  <ul className="list-group">
                    <li className="list-group-item">
                      Email :{this.props.email}
                    </li>
                    <li className="list-group-item">
                      Phone :{this.props.phone}
                    </li>
                  </ul>
                </div>
              ) : null}
            </div>
          );
        }}
      </Consumer>

      //       );
      //     }}
      //     >
    );
  }
}
Contact.propType = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};
export default Contact;
