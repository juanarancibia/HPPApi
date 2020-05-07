const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "mysql://WUxfUV0CvF:rFCaN1RhL9@remotemysql.com/WUxfUV0CvF"
);
const bcrypt = require("bcryptjs");
const Usuario = sequelize.import("../models/Usuario");

function signUp(req, res) {
  const { email, contrasena, rol, nombre, idPlani, sexo, fechaNac } = req.body;
  const hashedPwd = bcrypt.hashSync(contrasena, 5);
  Usuario.create({
    email: email,
    contrasena: hashedPwd,
    rol: rol,
    nombreCompleto: nombre,
    idPlanificacion: idPlani,
    sexo: sexo,
    fechaNac: fechaNac,
  })
    .then((nuevo) => {
      console.log(nuevo);
      res.send(nuevo);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
}

module.exports = {
  signUp: signUp,
};
