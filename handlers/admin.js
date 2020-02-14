const db = require("../models");

exports.createAdmin = async function(req, res) {
  try {
    let newAdmin = await db.Admin.create({
      email: req.body.email,
      password: req.body.password
    });
    return res.status(200).json({
      message: "New admin created successfully",
      newAdmin
    });
  } catch (error) {
    console.log("error admin", error);
  }
};

exports.showAdmins = async function(req, res) {
  try {
    let admins = await db.Admin.find();
    return res.status(200).json(admins);
  } catch (error) {
    console.log("error showAdmins", error);
  }
};
exports.showOneAdmin = async function(req, res) {
  try {
    let admin = await db.Admin.findById(req.params.id);
    return res.status(200).json(admin);
  } catch (error) {
    console.log("error admin", error);
  }
};

exports.deleteOneAdmin = async function(req, res) {
  try {
    let deletedAdmin = await db.Admin.deleteOne({ _id: req.params.id });
    return res.status(200).json({
      message: "Admin supprimé avec succès",
      admin: deletedAdmin
    });
  } catch (error) {
    console.log("error deleteOneAdmin", error);
  }
};

exports.updateManyAdmin = async function(res, req) {
  try {
    let updateManyAdmin = await db.Admin.updateMany();
    return res.status(200).json(updateManyAdmin);
  } catch (error) {
    console.log("error deleteAdmin", error);
  }
};
