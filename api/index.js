const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

app.get("/users/me", (req, res) => {
  res.json({
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "555-555-5555"
  })
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;