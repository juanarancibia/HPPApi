const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "mysql://WUxfUV0CvF:rFCaN1RhL9@remotemysql.com/WUxfUV0CvF"
);
const Planificacion = sequelize.import("../models/Planificacion");

function setPlanificacion(req, res) {
  const { nombre } = req.body;
  Planificacion.create({
    nombre: nombre,
  })
    .then((nuevo) => {
      res.send(nuevo);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
}

module.exports = {
  setPlanificacion: setPlanificacion,
};
