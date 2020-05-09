const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "mysql://WUxfUV0CvF:rFCaN1RhL9@remotemysql.com/WUxfUV0CvF"
);
const Seccion = sequelize.import("../models/Secciones");
const Wod = sequelize.import("../models/Wod");
const Entrenamiento = sequelize.import("../models/EntrenXPlani");

function setSeccion(req, res) {
  const { idPlani, fecha, tipoSeccion, comentarios, wods } = req.body;
  const d = new Date();
  if (!fecha) {
    fecha = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
  }

  Entrenamiento.findOne({
    where: {
      idPlani: idPlani,
      fecha: fecha,
    },
  })
    .then((resultado) => {
      if (resultado) {
        Seccion.create({
          idPlani: idPlani,
          fecha: fecha,
          tipoSeccion: tipoSeccion,
          comentarios: comentarios,
        })
          .then((nuevaSeccion) => {
            wods.forEach((wod) => {
              Wod.create({
                fecha: fecha,
                idSeccion: nuevaSeccion.idSeccion,
                idPlani: idPlani,
                descripcion: wod.descripcion,
                comentarios: wod.comentarios,
                tipoScore: wod.tipoScore,
                idTimer: wod.idTimer,
              });
            });
            res.send("Cargado correctamente");
          })
          .catch((err) => {
            console.log(err);
            res.send(err);
          });
      }
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
}

module.exports = {
  setSeccion: setSeccion,
};
