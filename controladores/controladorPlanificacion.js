const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "mysql://WUxfUV0CvF:rFCaN1RhL9@remotemysql.com/WUxfUV0CvF"
);
const Planificacion = sequelize.import("../models/Planificacion");
const Entrenamiento = sequelize.import("../models/EntrenXPlani");
const Seccion = sequelize.import("../models/Secciones");
const Wod = sequelize.import("../models/Wod");

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

function entrenamientoDia(req, res) {
  const { idPlani } = req.body;
  var d = new Date();

  Planificacion.hasMany(Entrenamiento, {
    foreignKey: "idPlani",
    sourceKey: "idPlanificacion",
  });
  Entrenamiento.belongsTo(Planificacion);

  Entrenamiento.hasMany(Seccion, {
    foreignKey: "idPlani",
    sourceKey: "idPlani",
  });
  Seccion.belongsTo(Entrenamiento);

  Seccion.hasMany(Wod, {
    foreignKey: "idSeccion",
    sourceKey: "idSeccion",
  });
  Wod.belongsTo(Seccion);

  Planificacion.findOne({
    where: {
      idPlanificacion: idPlani,
    },
    include: [
      {
        attributes: ["fecha", "comentarios"],
        model: Entrenamiento,
        where: {
          fecha: d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(),
        },
        include: [
          {
            model: Seccion,
            attributes: ["tipoSeccion", "comentarios"],
            where: {
              fecha:
                d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(),
            },
            include: [
              {
                model: Wod,
                attributes: [
                  "descripcion",
                  "comentarios",
                  "tipoScore",
                  "idTimer",
                ],
                where: {
                  fecha:
                    d.getFullYear() +
                    "/" +
                    (d.getMonth() + 1) +
                    "/" +
                    d.getDate(),
                  idPlani: idPlani,
                },
              },
            ],
          },
        ],
      },
    ],
  })
    .then((resultado) => {
      console.log(resultado);
      res.send(resultado);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
}

module.exports = {
  setPlanificacion: setPlanificacion,
  entrenamientoDia: entrenamientoDia,
};
