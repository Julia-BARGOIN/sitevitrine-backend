const mongoose = require("mongoose");

const avisSchema = new mongoose.Schema(
  {
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
      type: Date,
      required: false,
      defaul: Date
    }
  },
  {
    collection: "avis",
    minimize: false,
    versionKey: false
  }
);

const Avis = mongoose.model("avis", avisSchema);
module.exports = Avis;
