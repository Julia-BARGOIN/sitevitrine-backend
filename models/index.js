const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;

try {
  mongoose.connect("mongodb://localhost:27017/sitevitrinedb", {
    useNewUrlParser: true
  });
} catch (error) {
  console.log("test error");
}

module.exports.Admin = require("./admin");
module.exports.Article = require("./article");
module.exports.Avis = require("./avis");
module.exports.Patient = require("./patient");
