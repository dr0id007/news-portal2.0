import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class footer extends Component {
  render() {
    return (
      <footer
        style={{ position: "relative", bottom: "0%" }}
        className="page-footer font-small blue mt-4 footer"
      >
        <div className="footer-copyright text-center py-3">
          <NavLink to="/"> Made by Dr0id </NavLink>© 2020 Copyright
        </div>
      </footer>
    );
  }
}
