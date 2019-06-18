import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class about extends Component {
  state = {
    data: this.props.location.data,
    width: (50 * window.innerWidth) / 100
  };

  componentDidMount() {
    console.log(this.state.data);
    window.addEventListener("resize", this.onResize);
  }

  onResize = () => {
    this.setState({
      width: (50 * window.innerWidth) / 100
    });
  };

  render() {
    if (this.state.data === undefined) {
      return <Redirect to={"/"} />;
    }

    return (
      <div className="container mt-5">
        <div className="row d-block">
          <div className="col-12 text-center mb-5">
            <h1 className="font-weight-light">{this.state.data.title}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-10-md col">
            <img
              width={this.state.width}
              src={this.state.data.urlToImage}
              alt="some random"
              className="header-image"
            />
          </div>
          <div className="col-10-md col mt-2">
            <p>
              {this.state.data.description}
              {this.state.data.content}
            </p>
            <button className="btn btn-outline-primary">Full Article</button>
          </div>
        </div>
      </div>
    );
  }
}
