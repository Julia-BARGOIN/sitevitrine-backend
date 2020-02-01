const db = require("../avis");

exports.createAvis = async function(req, res) {
  try {
    let newAvis = await db.Avis.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      text: req.body.text,
      date: req.body.date
    });
    return res.status(200).json({
      message: "New avis created successfully",
      newAvis
    });
  } catch (errror) {
    console.log("error avis", error);
  }
};

exports.showAvis = async function(req, res) {
  try {
    let avis = await db.Avis.find();
    return res.status(200).json(avis);
  } catch (error) {
    console.log("error showAvis", error);
  }
};
exports.showOneAvis = async function(req, res) {
  try {
    let avis = await db.Avis.findById(req.params.id);
    return res.status(200).json(avis);
  } catch (error) {
    console.log("error showOneAvis", error);
  }
};

exports.deleteOneAvis = async function(req, res) {
  try {
    let deletedAvis = await db.Avis.deleteOne({ _id: req.params.id });
    return res.status(200).json({
      message: "Avis supprimé avec succès",
      avis: deletedAvis
    });
  } catch (error) {
    console.log("error deleteOneAvis", error);
  }
};

exports.updateManyAvis = async function(res, req) {
  try {
    let updateManyAvis = await db.Avis.updateMany();
  } catch (error) {
    console.log("error updateManyAvis", error);
  }
};
