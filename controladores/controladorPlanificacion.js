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

function getEntrenamiento(req, res) {
  const { idPlani, fecha, visible } = req.body;
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
      idPlanificacion: idPlani ? idPlani : 1,
    },
    include: [
      {
        attributes: ["idPlani", "visible", "fecha", "comentarios"],
        model: Entrenamiento,
        where: {
          fecha: fecha ? fecha : d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate(),
          visible: visible,
        },
        include: [
          {
            model: Seccion,
            attributes: ["idSeccion", "tipoSeccion", "comentarios"],
            where: {
              fecha:
                fecha ? fecha : d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate(),
            },
            separate: true,
            order: [['idSeccion', 'ASC'],],

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
                  fecha: fecha ? fecha : d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate(),
                  idPlani: idPlani ? idPlani : 1,
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
      res.json(resultado);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
}

function getPlanis(req, res) {
  Planificacion.findAll().then(resultado => {
    res.json(resultado);
  }).catch(err => {
    res.json({ error: err });
  });
}

module.exports = {
  setPlanificacion: setPlanificacion,
  getEntrenamiento: getEntrenamiento,
  getPlanis: getPlanis,
};
