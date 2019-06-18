import React, { Component } from "react";

export default class subscribe extends Component {
  render() {
    return (
      <div className="subscribe container-fluid mt-5">
        <div className="text-center mt-5 font-weight-light">
          <i className="text-center far fa-envelope-open fa-5x" />
          <br />
          <h2 className="mt-4">Subscribe to our Newsletter</h2>
        </div>
        <form className="form">
          <div className="row">
            <div className="offset-3 col-6 mt-3">
              <div className="input-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="E-mail"
                />
                <span className="input-group-addon">
                  <button className="btn btn-primary sub h-100">
                    Subscribe
                  </button>
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
