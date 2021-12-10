const express = require("express");
const app = express();

// req => middleware => res

const logger = (req, res, next) => {
  const { method, url } = req;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next();
};

app.get("/", logger, (req, res) => {
  res.send("Home");
});
app.get("/about", logger, (req, res) => {
  res.send("About");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
