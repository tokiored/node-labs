const express = require("express");
const path = require("path");

const app = express();

// setup static and middleware
app.use(express.static("./04-express-app-public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./04-express-app/content/index.html"));
});

app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000....");
});
