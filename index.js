const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const { login } = require("./handlers/authentification");
const {
  createAdmin,
  showAdmins,
  showOneAdmin,
  deleteOneAdmin
} = require("./handlers/admin");
const {
  createArticle,
  showArticles,
  showOneArticle,
  deleteOneArticle
} = require("./handlers/article");
const {
  createAvis,
  showAvis,
  showOneAvis,
  deleteOneAvis
} = require("./handlers/avis");
const {
  createPatient,
  showPatient,
  showOnePatient,
  deleteOnePatient
} = require("./handlers/patient");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  res.send("bienvenue sur le back-end du site vitrine");
});

app.post("/oauth", login);

app.post("/admin/create", createAdmin);
app.get("/admin/show", showAdmins);
app.get("/admin/:id", showOneAdmin);
app.delete("/admin/:id", deleteOneAdmin);

app.post("/article/create", createArticle);
app.post("/articles/show", showArticles);
app.get("/article/:id", showOneArticle); // para dynamique
app.delete("/article/:id", deleteOneArticle);

app.post("/avis/create", createAvis);
app.get("/avis/show", showAvis);
app.get("/avis/:id", showOneAvis);
app.delete("/avis/:id", deleteOneAvis);

app.post("/patient/create", createPatient);
app.get("/patient/show", showPatient);
app.get("/patient/:id", showOnePatient);
app.delete("/patient/:id", deleteOnePatient);

app.listen(8081, function() {
  console.log("back-end running on port 8081");
});
