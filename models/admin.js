const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    token: {
      signature: String,
      created_at: Date,
      expired_at: Date
    }
  },
  {
    collection: "admin",
    minimize: false,
    versionKey: false
  }
);

const Admin = mongoose.model("admin", adminSchema);
module.exports = Admin;
