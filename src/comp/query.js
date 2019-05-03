import React from "react";
import axios from "axios";

export default function query(term) {
  let q = "";
  let url = "";
  const key = process.env.REACT_APP_APIKEY;

  if (term !== null) {
    q = term;
    url = "https://newsapi.org/v2/everything?q=" + q + "&apiKey=" + key;
    console.log("url:-", url);
  } else {
    q = "top-headlines?" + "country=us&apiKey=";
    url = "https://newsapi.org/v2/top-headlines&apiKey=" + key;
    console.log("url:-", url);
  }
  //24d9fc782dec45cfa9a201e6e33cf177";
  const da1 = axios
    .get(url)
    .then(res => res.data)
    .then(data => {
      console.log("data:-", data);
      const da = data.articles.map(object => {
        console.log("ss", object.author);
        return (
          <div key={object.publishedAt}>
            <p>
              {/* {object.title}
              {object.description} */}
              {object.url}
            </p>
          </div>
        );
      });
      return da;
    });
  return <div>{da1}</div>;
}
