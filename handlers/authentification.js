const db = require("../models");
const JWT = require("../jwt.js");

exports.login = async function(req, res) {
  try {
    const query = {
      email: req.body.email,
      password: req.body.password
    };
    let code = 200;

    let login = await db.Admin.findOne(query)
      .then(async admin => {
        if (!admin) {
          code = 401;
          return {
            code: 401,
            message: "Unauthorized"
          };
        }

        const jwt = new JWT();
        const token = jwt.JWTgenerator({
          id: admin._id,
          email: admin.email
        }).signature;
        const result = await jwt.saveToken(admin._id, token);
        return {
          token: result.token.signature
        };
      })
      .catch(() => {
        code = 500;
        return {
          code: 500,
          message: "internal server error"
        };
      });

    return res.status(code).json(login);
  } catch (error) {
    return res.status(200).json({
      code: 500,
      message: "internal server error"
    });
  }
};
