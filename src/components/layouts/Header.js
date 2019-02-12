import React from "react";
import PropTypes from "prop-types";

export default function Header(props) {
  const branding = props.branding;
  return (
    <nav className=" nav navbar navbar-expand-sm navbar-dark bg-info mb-3 py-0">
      <a href="/" className="navbar-brand">
        {branding}
      </a>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a href="/about" className="nav-link">
            ABOUT
          </a>
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
