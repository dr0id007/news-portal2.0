const express = require("express");
const cors = require("cors");
const axios = require("axios");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/api/", async (req, res) => {
  console.log("get called");
  console.log(req.body);
  if (req.body.url) {
    try {
      const { url } = req.body;
      const data = await axios.get(url).catch((err) => {
        console.log(err);
        return res.send("server error").status(400);
      });
      console.log(data.data);
      return res.send(data.data);
    } catch (err) {
      console.log(err);
      return res.send("server error").status(400);
    }
  } else {
    return res.send("hello world.!");
  }
});

app.use(express.static(path.join(__dirname, "../build")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../build"));
});

// app.get("/", (req, res) => {
//   return res.send("hello world.!");
// });

app.listen(process.env.PORT || 4000);
