import React, { Component } from "react";
import axios from "axios";
import card from "./card";
import req from "./req";

export default class search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: [],
      highlights: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  async handleSubmit(e) {
    e.preventDefault();
    const q = this.state.search;
    const key = process.env.REACT_APP_APIKEY;
    const url = "https://newsapi.org/v2/everything?q=" + q + "&apiKey=" + key;
    console.log("url:-", url);
    const ss = await req(url);
    this.setState({
      highlights: ss
    });
  }

  async componentDidMount() {
    const key = process.env.REACT_APP_APIKEY;
    const url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=" + key;
    console.log("url:-", url);
    const ss = await req(url);
    this.setState({
      highlights: ss
    });
  }

  render() {
    return (
      <div>
        <div className="search">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group has-search">
              <span className="fas fa-search form-control-feedback" />
              <input
                type="text"
                name="search"
                className="form-control"
                placeholder="Search"
                onChange={this.handleChange}
              />
            </div>
          </form>
        </div>
        <div className="container">
          <div className="card-columns">{this.state.highlights}</div>
        </div>
      </div>
    );
  }
}
