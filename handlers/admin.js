const db = require("../models");

exports.createAdmin = async function(req, res) {
  try {
    let newAdmin = await db.Admin.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
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

exports.showAdmin = async function(req, res) {
  try {
    let admin = await db.Admin.findById("5e0b223c1b3d7c046eaa04d3");
    return res.status(200).json(admin);
  } catch (error) {
    console.log("error showAdmin", error);
  }
};

exports.deleteAdmin = async function(req, res) {
  try {
    let deleteAdmin = await db.Admin.deleteMany();
  } catch (error) {
    console.log("error deleteAdmin", error);
  }
};

// créer un delete pour un admin précis
// faire un update pour modifier ces données

// faire model de l'avis et le blog faire route et handlers
// create article du blog fait et tester
