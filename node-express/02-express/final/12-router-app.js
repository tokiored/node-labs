const express = require("express");
const app = express();

const people = require("./12-router-app-routes/people");
const auth = require("./12-router-app-routes/auth");

// static assets
app.use(express.static("./11-methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.use("/api/people", people);
app.use("/login", auth);

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});
