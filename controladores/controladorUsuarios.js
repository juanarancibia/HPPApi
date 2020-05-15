const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "mysql://WUxfUV0CvF:rFCaN1RhL9@remotemysql.com/WUxfUV0CvF"
);
const bcrypt = require("bcryptjs");
const Usuario = sequelize.import("../models/Usuario");
const jwt = require("jsonwebtoken");

function signUp(req, res) {
  const {
    email,
    contrasena,
    rol,
    nombre,
    apellido,
    idPlani,
    sexo,
    fechaNac,
  } = req.body;
  const hashedPwd = bcrypt.hashSync(contrasena, 5);
  Usuario.create({
    email: email,
    contrasena: hashedPwd,
    rol: rol,
    nombre: nombre,
    apellido: apellido,
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

function logIn(req, res) {
  const { usuario, contrasena } = req.body;
  Usuario.findAll({
    where: {
      email: usuario,
    },
    attributes: [
      "email",
      "contrasena",
      "nombre",
      "apellido",
      "idPlanificacion",
      "rol",
    ],
  })
    .then((resultado) => {
      console.log(resultado);
      if (resultado.length < 1) {
        res.json("Usuario o contraseña incorrectos");
        return;
      }
      if (bcrypt.compareSync(contrasena, resultado[0].dataValues.contrasena)) {
        res.json({
          token: jwt.sign(
            {
              usuario: usuario,
              rol: resultado[0].dataValues.rol,
              idPlani: resultado[0].dataValues.idPlanificacion,
            },
            "ContraseñaJWT"
          ),
          rol: resultado[0].dataValues.rol,
        });
      } else {
        res.json("Usuario o contraseña incorrectos");
      }
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
}

module.exports = {
  signUp: signUp,
  logIn: logIn,
};
