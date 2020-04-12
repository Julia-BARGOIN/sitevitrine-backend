const CrytoJS = require("crypto-js");
const db = require("./models/");

class JWT {
  encodeBase64(source) {
    const encodeSource = CrytoJS.enc.Utf8.parse(JSON.stringify(source));

    return CrytoJS.enc.Base64.stringify(encodeSource)
      .replace(/=+$/, "")
      .replace(/\+/g, "-")
      .replace(/\//g, "_");
  }
  encodeSHA256(source) {
    const secret = "secret";
    let encodeSource = CrytoJS.enc.Utf8.parse(JSON.stringify(source));
    encodeSource = CrytoJS.HmacSHA256(encodeSource, secret);
    return this.encodeBase64(encodeSource);
  }
  JWTgenerator(admin) {
    if (!admin.id && !admin.email) {
      return new Error(
        "[ERROR] JWTgenerator() -> admin id or email is missing !"
      );
    }
    const header = { alg: "HS256", typ: "JWT" };
    const payload = { id: admin.id, email: admin.email };
    const signature = { header, payload, timestamp: Date.now() };
    return {
      header: this.encodeBase64(header),
      payload: this.encodeBase64(payload),
      signature: this.encodeSHA256(signature)
    };
  }
  saveToken(id, token) {
    const milliMonth = 2592000000;
    const updateAdmin = {
      token: {
        signature: token,
        created_at: new Date(Date.now()).toUTCString(),
        expired_at: new Date(Date.now() + milliMonth).toUTCString()
      }
    };
    return new Promise((resolve, reject) => {
      db.Admin.findByIdAndUpdate(id, updateAdmin, { new: true })
        .then(admin => {
          resolve(admin);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
  verifyToken(token) {
    return new Promise(async (resolve, reject) => {
      await db.Admin.findOne({ "token.signature": token })
        .then(admin => {
          resolve(admin);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  express() {
    return (req, res, next) => {
      if (req.headers["access-token"] || req.headers["token"]) {
        const token = req.headers["access-token"] || req.headers["token"];

        this.verifyToken(token)
          .then(admin => {
            if (!Object.keys(admin).length) {
              res.status(401).json({
                code: 401,
                message: "unauthorized"
              });
              return;
            }
            next();
          })
          .catch(error => {
            res.status(401).json({
              code: 401,
              message: "unauthorized"
            });
            return;
          });
        return;
      }

      res.status(403).json({
        code: 403,
        message: "Invalid parameters in header please set token or access-token"
      });
    };
  }
}

module.exports = JWT;
