import Axios from "axios";
import Card from "../views/card-boot";

const fetch = async (data) => {
  const key = process.env.REACT_APP_APIKEY;
  console.log("key", key);
  let url = "";
  if (data === null) {
    url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=" + key;
  } else {
    // url = "https://newsapi.org/v2/everything?q=" + data + "&apiKey=" + key;
    url =
      "https://newsapi.org/v2/everything?q=" +
      data +
      "&apiKey=24d9fc782dec45cfa9a201e6e33cf177";
  }

  const body = { url };

  console.log(body);

  let da = await Axios.post(
    "http://localhost:" + process.env.PORT || 4000 + "/api/",
    body
  )
    .then((data) => {
      return data.data.articles;
    })
    .then((data) => {
      const value = data.map((key) => {
        return Card(key);
      });
      return value;
    })
    .catch((error) => {
      console.log("error", error);
    });
  return da;
};

export default fetch;
