import Axios from "axios";
import Card from "../views/card-boot";

const fetch = async (data) => {
  const key = process.env.REACT_APP_APIKEY;
  console.log("key", key);
  let url = "";
  if (data === null) {
    url =
      "https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=in&apiKey=" +
      key;
  } else {
    // url = "https://newsapi.org/v2/everything?q=" + data + "&apiKey=" + key;
    url =
      "https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/everything?q=" +
      data +
      "&apiKey=24d9fc782dec45cfa9a201e6e33cf177";
  }
  console.log(url);

  let da = await Axios.get(url, {
    // headers: {
    //   "Access-Control-Allow-Origin": "*",
    //   "Content-Type": "application/json",
    // },
  })

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
