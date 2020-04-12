const JWT = require("../jwt.js");
const jwt = new JWT();

const admin = {
  id: "5e4ba61719d94d0642ad9c4f",
  email: "rose@tuta.io"
};

const token = jwt.JWTgenerator(admin).signature;

console.log(token);

jwt.saveToken(admin.id, token).then(adminUpdated => {
  jwt
    .verifyToken(adminUpdated.token.signature)
    .then(admin => {
      console.log(admin);
    })
    .catch(err => {
      console.log(err);
    });
});
