import React from "react";
import { NavLink } from "react-router-dom";

const card_boot = data => {
  let value = data.urlToImage;
  if (value === null) {
    value =
      "https://images.pexels.com/photos/261949/pexels-photo-261949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
  }

  return (
    <div key={data.title} className="card">
      <div className="view">
        <img src={value} className="card-img-top" alt="preview" />
        <a href="some">
          <div className="mask rgba-white-slight" />
        </a>
      </div>

      <div className="card-body elegant-color white-text">
        <h4 className="card-title">{data.title}</h4>
        <NavLink
          to={{
            pathname: "/view",
            data: data
          }}
          className="btn btn-outline-white btn-md waves-effect"
        >
          Read More
        </NavLink>
      </div>
    </div>
  );
};

export default card_boot;
