const db = require("../models");

exports.createPatient = async function(req, res) {
  try {
    let newPatient = await db.Patient.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      phone: req.body.phone,
      subject: req.body.subject
    });
    return res.status(200).json({
      message: "New patient create successful",
      newPatient
    });
  } catch (error) {
    console.log("error patient", error);
  }
};

exports.showPatient = async function(req, res) {
  try {
    let patient = await db.Patient.aggregate([
      {
        $sort: {
          date: -1
        }
      },
      {
        $limit: req.body.limit || 10
      }
    ]);
    return res.status(200).json(patient);
  } catch (error) {
    console.log("error showPatient", error);
  }
};

exports.showOnePatient = async function(req, res) {
  try {
    let patient = await db.Patient.findById(req.params.id);
    return res.status(200).json(patient);
  } catch (error) {
    console.log("error patient", error);
  }
};

exports.deleteOnePatient = async function(req, res) {
  try {
    let deletedPatient = await db.Patient.deleteOne({ _id: req.params.id });
    return res.status(200).json({
      message: "Patient supprimé avec succès",
      patient: deletedPatient
    });
  } catch (error) {
    console.log("error deleteOnePatient", error);
  }
};
