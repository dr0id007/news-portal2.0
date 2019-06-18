import React, { Component } from "react";
import Fetch from "../function/fetch";
import { connect } from "react-redux";

class topbar extends Component {
  state = {
    width: window.innerWidth,
    click: "",
    data: ""
  };
  componentDidMount() {
    window.addEventListener("resize", this.handleWidth);
  }

  handleWidth = () => {
    this.setState({
      width: window.innerWidth
    });
  };

  onClick = async e => {
    await this.setState({
      click: e.target.name
    });
    console.log("click:-", this.state.click);
    const value = await Fetch(this.state.click);
    console.log("value:-", value);
    this.setState({
      data: value
    });
    this.props.add(this.state.data);
  };

  render() {
    if (this.state.width < 650) {
      return <div />;
    }
    return (
      <nav className="navbar topbar navbar-expand-lg shadow">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <button
              name="World"
              onClick={this.onClick}
              className="btn btn-default nav-link"
              to="/"
            >
              World
            </button>
          </li>
          <li className="nav-item">
            <button
              name="Technology"
              onClick={this.onClick}
              className="btn btn-default nav-link"
              to="/"
            >
              Technology
            </button>
          </li>
          <li className="nav-item">
            <button
              name="Design"
              onClick={this.onClick}
              className="btn btn-default nav-link"
              to="/"
            >
              Design
            </button>
          </li>
          <li className="nav-item active">
            <button
              name="Culture"
              onClick={this.onClick}
              className="btn btn-default nav-link"
              to="/"
            >
              Culture
            </button>
          </li>
          <li className="nav-item active">
            <button
              name="Business"
              onClick={this.onClick}
              className="btn btn-default nav-link"
              to="/"
            >
              Business
            </button>
          </li>
          <li className="nav-item active">
            <button
              name="Politics"
              onClick={this.onClick}
              className="btn btn-default nav-link"
              to="/"
            >
              Politics
            </button>
          </li>
          <li className="nav-item active">
            <button
              name="Science"
              onClick={this.onClick}
              className="btn btn-default nav-link"
              to="/"
            >
              Science
            </button>
          </li>
          <li className="nav-item active">
            <button
              name="Health"
              onClick={this.onClick}
              className="btn btn-default nav-link"
              to="/"
            >
              Health
            </button>
          </li>
          <li className="nav-item active">
            <button
              name="Lifestyle"
              onClick={this.onClick}
              className="btn btn-default nav-link"
              to="/"
            >
              Lifestyle
            </button>
          </li>
          <li className="nav-item active">
            <button
              name="Travel"
              onClick={this.onClick}
              className="btn btn-default nav-link"
              to="/"
            >
              Travel
            </button>
          </li>
        </ul>
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
)(topbar);
