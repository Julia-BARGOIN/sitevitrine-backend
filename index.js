const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const { createAdmin, showAdmin } = require("./handlers/admin");
const { createArticle } = require("./handlers/article");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  res.send("bienvenue sur le back-end du site vitrine");
});

app.post("/admin", createAdmin);
app.get("/admin", showAdmin);

app.post("/article", createArticle);

app.listen(8081, function() {
  console.log("back-end running on port 8081");
});
