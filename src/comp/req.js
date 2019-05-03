import React from "react";
import card from "./card";
import axios from "axios";

export default async function req(link1) {
  let url = "";
  if (link1 != null) {
    url = link1;
  } else {
    console.log("error");
  }
  const zz = await axios
    .get(url)
    .then(res => res.data)
    .then(data => {
      console.log("data:-", data);
      const da = data.articles.map(object => {
        return (
          <div key={object.publishedAt}>
            {card(
              object.title,
              object.author,
              object.description,
              object.url,
              object.urlToImage
            )}
          </div>
        );
      });
      return da;
    });
  return zz;
}
