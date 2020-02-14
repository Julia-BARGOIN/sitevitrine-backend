const db = require("../models");

exports.login = async function(req, res) {
  try {
    const query = {
      email: req.body.email,
      password: req.body.password
    };
    let code = 200;

    let login = await db.Admin.findOne(query)
      .then(user => {
        if (!user) {
          code = 401;
          return {
            code: 401,
            message: "Unauthorized"
          };
        }
        return {
          code: 200,
          message: "ok"
        };
      })
      .catch(() => {
        code = 401;
        return {
          code: 401,
          message: "Unauthorized"
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
