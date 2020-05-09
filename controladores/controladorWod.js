const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "mysql://WUxfUV0CvF:rFCaN1RhL9@remotemysql.com/WUxfUV0CvF"
);
const Seccion = sequelize.import("../models/Secciones");
const Wod = sequelize.import("../models/Wod");

function setWod(req, res) {
  const { idPlani, fecha, idSeccion, wods } = req.body;
  const d = new Date();
  if (!fecha) {
    fecha = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
  }

  Seccion.findOne({
    where: {
      idPlani: idPlani,
      fecha: fecha,
      idSeccion: idSeccion,
    },
  })
    .then((resultado) => {
      if (resultado) {
        wods.forEach((wod) => {
          Wod.create({
            fecha: fecha,
            idSeccion: resultado.idSeccion,
            idPlani: idPlani,
            descripcion: wod.descripcion,
            comentarios: wod.comentarios,
            tipoScore: wod.tipoScore,
            idTimer: wod.idTimer,
          });
        });
        return res.send("Cargado correctamente!");
      }
      return res.send("No existe la seccion indicada");
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
}

module.exports = {
  setWod: setWod,
};
