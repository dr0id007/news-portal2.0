import React from "react";

export default function card(title, author, desc, url, image) {
  return (
    <div className="">
      <div className="card">
        <img className="card-img-top" src={image} alt="" />
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{desc}</p>
          <a className="card-link" href={url}>
            Show More...
          </a>
        </div>
      </div>
    </div>
  );
}
