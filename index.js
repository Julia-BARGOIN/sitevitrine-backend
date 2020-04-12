const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const JWT = require("./jwt");
const jwt = new JWT();

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
  deleteOneArticle,
  updateArticle
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

app.post("/admin/create", jwt.express(), createAdmin);
app.get("/admin/show", jwt.express(), showAdmins);
app.get("/admin/:id", jwt.express(), showOneAdmin);
app.delete("/admin/:id", jwt.express(), deleteOneAdmin);

app.delete("/article/delete/:id", jwt.express(), deleteOneArticle);
app.post("/article/create", jwt.express(), createArticle);
app.post("/articles/show", jwt.express(), showArticles);
app.get("/article/:id", jwt.express(), showOneArticle); // para dynamique
app.put("/article/update/:id", jwt.express(), updateArticle);

app.post("/avis/create", jwt.express(), createAvis);
app.get("/avis/show", jwt.express(), showAvis);
app.get("/avis/:id", jwt.express(), showOneAvis);
app.delete("/avis/:id", jwt.express(), deleteOneAvis);

app.post("/patient/create", jwt.express(), createPatient);
app.get("/patient/show", jwt.express(), showPatient);
app.get("/patient/:id", jwt.express(), showOnePatient);
app.delete("/patient/:id", jwt.express(), deleteOnePatient);

app.listen(8081, function() {
  console.log("back-end running on port 8081");
});
