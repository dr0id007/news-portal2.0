import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Footer from "./footer";

export default class about extends Component {
  state = {
    data: this.props.location.data,
    width: (50 * window.innerWidth) / 100,
  };

  componentDidMount() {
    window.addEventListener("resize", this.onResize);
  }

  onResize = () => {
    this.setState({
      width: (50 * window.innerWidth) / 100,
    });
  };

  render() {
    if (this.state.data === undefined) {
      return <Redirect to={"/"} />;
    }

    return (
      <div>
        <div className="container mt-5 mb-5 pb-5">
          <div className="row d-block">
            <div className="col-12 text-center mb-5">
              <h1 className="font-weight-light">{this.state.data.title}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12-md col">
              <img
                width={this.state.width}
                src={this.state.data.urlToImage}
                alt="some random"
                className="header-image"
              />
            </div>
            <div className="col-12-md col mt-2">
              <p style={{ color: "#7c7c7c" }}>
                {this.state.data.description}
                {this.state.data.content}
              </p>
            </div>
          </div>
          <div className="mt-4">
            <a href={this.state.data.url} className="btn btn-outline-primary">
              Full Article
            </a>
          </div>
        </div>
        {/* <Footer className="mt-5 pt-5" /> */}
      </div>
    );
  }
}
