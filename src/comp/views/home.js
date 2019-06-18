import React, { Component } from "react";
import Fetch from "../function/fetch";
import Footer from "./footer";
import { connect } from "react-redux";
import Topbar from "./topbar";

class home extends Component {
  state = {
    data: "",
    card: "",
    redux_data: ""
  };

  async componentDidMount() {
    const data = await Fetch(null);
    await this.setState({
      data: data
    });
  }

  render() {
    return (
      <div>
        <Topbar />
        <div className="container">
          <h1 className="heading text-center m-5">
            {this.props.state === "" ? "Top Headlines" : "Headlines"}
          </h1>
          <div className="card-columns">
            {this.props.state === "" ? this.state.data : this.props.state}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { state: state.data };
};

export default connect(mapStateToProps)(home);
