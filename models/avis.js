const mongoose = require("mongoose");

const avisSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
});

const Avis = mongoose.model("Admin", adminSchema);
module.exports = Avis;
