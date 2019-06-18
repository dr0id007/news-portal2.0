import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Fetch from "../function/fetch";
import { connect } from "react-redux";

class navbar extends Component {
  state = {
    term: "",
    data: "",
    search: false
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = async e => {
    e.preventDefault();
    const value = await Fetch(this.state.term);
    this.setState({
      search: true,
      data: value
    });
    console.log("search", this.state.search);
    this.props.add(this.state.data);
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-light navbar-light shadow sticky-top">
        <NavLink className="navbar-brand align-items-center" to="/">
          News-Portal
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/subscribe">
                Subscibe
              </NavLink>
            </li>
          </ul>

          <form className="form mr-sm-2 ml-sm-4" onSubmit={this.onSubmit}>
            <div className="input-group">
              <span className="input-group-append">
                <div className="input-group-text bg-white icon">
                  <i className="fas fa-search" />
                </div>
              </span>
              <input
                className="form-control searc"
                name="term"
                type="text"
                onChange={this.onChange}
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </form>
        </div>
      </nav>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: data => {
      dispatch({
        type: "SEARCH",
        data: data
      });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(navbar);
