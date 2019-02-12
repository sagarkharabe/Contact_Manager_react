import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Header(props) {
  const branding = props.branding;
  return (
    <nav className=" nav navbar navbar-expand-sm navbar-dark bg-info mb-3 py-0">
      <a href="/" className="navbar-brand">
        {branding}
      </a>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <i className="fas fa-home" /> HOME
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact/add" className="nav-link">
            <i className="fas fa-plus" /> ADD CONTACT
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            <i className="fas fa-question" /> ABOUT
          </Link>
        </li>
      </ul>
    </nav>
  );
}

Header.defaultProps = {
  branding: "Contact Manager"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};
