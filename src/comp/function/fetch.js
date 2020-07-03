import Axios from "axios";
import Card from "../views/card-boot";

const fetch = async (data) => {
  const key = process.env.REACT_APP_APIKEY;
  console.log("key", key);
  let url = "";
  if (data === null) {
    url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=" + key;
  } else {
    url = "https://newsapi.org/v2/everything?q=" + data + "&apiKey=" + key;
  }
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
