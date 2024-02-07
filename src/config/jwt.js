const jwt = require("jsonwebtoken");

// esta función me sirve para generar la LLAVE (token)
const generateSign = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1y" });
};

//esta funcion me sirve si la llave la hemos hecho nosotros

const verifyJwt = (token) =>{
  return jwt.verify(token, process.env.JWT_SECRET)
}

module.exports = {generateSign, verifyJwt}