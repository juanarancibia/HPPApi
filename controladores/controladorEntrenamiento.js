const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "mysql://WUxfUV0CvF:rFCaN1RhL9@remotemysql.com/WUxfUV0CvF"
);
const Entrenamiento = sequelize.import("../models/EntrenXPlani");
const Seccion = sequelize.import("../models/Secciones");
const Wod = sequelize.import("../models/Wod");

function setEntrenamiento(req, res) {
  const { idPlani, comentarios, visible, secciones } = req.body;
  var d = new Date();
  Entrenamiento.create({
    fecha: d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(),
    idPlani: idPlani,
    comentarios: comentarios,
    visible: visible,
  })
    .then((Ent) => {
      console.log(Ent.dataValues);
      if (secciones) {
        console.log(secciones);
        secciones.forEach((sec) => {
          console.log(sec);
          Seccion.create({
            idPlani: idPlani,
            fecha: Ent.dataValues.fecha,
            tipoSeccion: sec.tipo,
            comentarios: sec.comentarios,
          })
            .then((nuevo) => {
              if (sec.wods) {
                console.log(sec.wods);
                sec.wods.forEach((wod) => {
                  Wod.create({
                    fecha: Ent.dataValues.fecha,
                    idSeccion: nuevo.dataValues.idSeccion,
                    idPlani: idPlani,
                    descripcion: wod.descripcion,
                    comentarios: wod.comentarios,
                    tipoScore: wod.tipoScore,
                    idTimer: wod.idTimer,
                  });
                });
              }
            })
            .catch((err) => res.send(err));
        });
      }
      res.send(Ent);
    })
    .catch((err) => res.send(err));
}

module.exports = {
  setEntrenamiento: setEntrenamiento,
};
