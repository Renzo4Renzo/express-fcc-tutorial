const express = require("express");
const app = express();

const authRouter = require("./routes/auth");
const peopleRouter = require("./routes/people");

// static assets
app.use(express.static("./methods-public"));
//Parse form data
app.use(express.urlencoded({ extended: false }));
//Parse JSON
app.use(express.json());

app.use("/api/people", peopleRouter);
app.use("/login", authRouter);

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
