const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "mysql://WUxfUV0CvF:rFCaN1RhL9@remotemysql.com/WUxfUV0CvF"
);
const Entrenamiento = sequelize.import("../models/EntrenXPlani");
const Seccion = sequelize.import("../models/Secciones");
const Wod = sequelize.import("../models/Wod");

function setEntrenamiento(req, res) {
  const { idPlani, comentarios, visible, fecha, secciones } = req.body;
  console.log(req.body);
  console.log(idPlani);
  var d = new Date();
  Entrenamiento.create({
    fecha: fecha ? fecha : d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate(),
    idPlani: idPlani,
    comentarios: comentarios,
    visible: visible,
  })
    .then((Ent) => {
      if (secciones) {
        console.log(secciones);
        secciones.forEach((sec) => {
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
                    idTimer: wod.idTimer == "" ? null : pass,
                  });
                });
              }
            }).then(resp => res.json(resp))
            .catch((err) => res.json(err));
        });

      }

    })
    .catch((err) => res.json(err));
}

function updateEntrenamiento(req, res) {
  const { idPlani, comentarios, visible, secciones, fecha } = req.body;
  Entrenamiento.update(
    {
      comentarios: comentarios,
      visible: visible,
    },
    {
      where: {
        idPlani: idPlani,
        fecha: fecha,
      },
    }
  ).then((Ent) => {
    if (secciones) {
      secciones.forEach((sec) => {
        console.log(sec);
        Seccion.update(
          {
            tipoSeccion: sec.tipo,
            comentarios: sec.comentarios,
          },
          {
            where: {
              idPlani: idPlani,
              idSeccion: sec.id,
              fecha: fecha,
            },
          }
        )
          .then((nuevo) => {
            if (sec.wods) {
              sec.wods.forEach((wod) => {
                Wod.update(
                  {
                    descripcion: wod.descripcion,
                    comentarios: wod.comentarios,
                    tipoScore: wod.tipoScore,
                    idTimer: wod.idTimer,
                  },
                  {
                    where: {
                      fecha: fecha,
                      idSeccion: sec.id,
                      idPlani: idPlani,
                      idWod: wod.idWod,
                    },
                  }
                );
              });
            }
          })
          .catch((err) => res.send(err));
      });
    }
    res.send(Ent);
  });
}

module.exports = {
  setEntrenamiento: setEntrenamiento,
  updateEntrenamiento: updateEntrenamiento,
};
