const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    subject: {
      type: String,
      required: true
    }
  },
  {
    collection: "patient",
    minimize: false,
    versionKey: false
  }
);

const Patient = mongoose.model("patient", patientSchema);
module.exports = Patient;
