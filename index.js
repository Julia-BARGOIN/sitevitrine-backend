const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

// const {
//   createAdmin,
//   showAdmin,
//   showOneAdmin,
//   deleteOneAdmin
// } = require("./handlers/admin");
const {
  createArticle,
  showArticles,
  showOneArticle,
  deleteOneArticle
} = require("./handlers/article");
// const {
//   createAvis,
//   showAvis,
//   showOneAvis,
//   deleteOneAvis
// } = require("./handlers/avis");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  res.send("bienvenue sur le back-end du site vitrine");
});

// app.post("/admin", createAdmin);
// app.get("/admin", showAdmin);
// app.get("/admin/:id", showOneAdmin);
// app.delete("/admin/:id", deleteOneAdmin);

app.post("/article", createArticle);
app.get("/article", showArticles);
app.get("/article/:id", showOneArticle); // para dynamique
app.delete("/article/:id", deleteOneArticle);

// app.post("/avis", createAvis);
// app.get("/avis", showAvis);
// app.get("/avis/:id", showOneAvis);
// app.delete("/avis/:id", deleteOneAvis);

app.listen(8081, function() {
  console.log("back-end running on port 8081");
});
