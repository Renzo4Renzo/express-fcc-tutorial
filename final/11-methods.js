const express = require("express");
const { reset } = require("nodemon");
const app = express();

let { people } = require("./data");

// static assets
app.use(express.static("./methods-public"));

//Parse form data
app.use(express.urlencoded({ extended: false }));

//Parse JSON
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).send({ success: false, msg: "Please provide name value!" });
  }
  res.status(201).json({ success: true, person: name });
});

app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, msg: "Please provide name value!" });
  }
  res.status(201).send({ success: true, data: [...people, { name: name }] });
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  return res.status(401).send("Please provide credentials!");
});

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res.status(404).json({ success: false, msg: `No person with id ${id}` });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  return res.status(200).json({ success: true, newPeople });
});

app.delete("/api/people/:id", (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));
  if (!person) {
    return res.status(404).json({ success: false, msg: `No person with id ${req.params.id}` });
  }
  const newPeople = people.filter((person) => person.id !== Number(req.params.id));
  return res.status(200).json({ success: true, data: newPeople });
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
