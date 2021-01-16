const express = require("express");
const app = express();

// http://localhost:3000/
app.get("/", (req, res) => {
  const output = "Hello World";
  res.send(output);
});

// http://localhost:3000/login
app.get("/login", (req, res) => {
  const output = { id: 1, login: false, message: "Login fails" };
  res.json(output);
});

// http://localhost:3000/regiser
app.get("/register", (req, res) => {
  const output = {
    id: 1,
    title: "Hello World",
    message: "I ama resgier api",
  };

  res.json(output);
});

app.get("*", (req, res) => {
  res.json({ message: "Invalid URL" });
});

// app.listen(3000);
app.listen(3000, () => console.log("Server Started...."));
