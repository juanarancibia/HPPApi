const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "mysql://WUxfUV0CvF:rFCaN1RhL9@remotemysql.com/WUxfUV0CvF"
);
const Score = sequelize.import("../models/Score");
const jwt = require("jsonwebtoken");

function setScore(req, res) {
  const { idWod, idPlani, idSeccion, fecha, score } = req.body;
  const token = req.headers.authorization.split(" ")[1];
  const payload = jwt.verify(token, "ContraseñaJWT");
  Score.create({
    email: payload.usuario,
    idWod: idWod,
    idPlani: idPlani,
    idSeccion: idSeccion,
    fecha: fecha,
    score: score,
  })
    .then((nuevo) => {
      res.send(nuevo);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
}

function getScoreAtletaWod(req, res) {
  const { email, idWod, idSeccion, fecha, idPlani } = req.body;
  console.log("GEET SCOOORE");
  Score.findAll({
    where: {
      email: email,
      idWod: idWod,
      idSeccion: idSeccion,
      fecha: fecha,
      idPlani: idPlani,
    },
  })
    .then((resultado) => {
      console.log("RESULTADO" + resultado);
      res.send(resultado);
    })
    .catch((err) => {
      res.send(err);
    });
}

function getScoreWod(req, res) {
  const { idWod, idSeccion, fecha, idPlani } = req.body;
  Score.findAll({
    where: {
      idWod: idWod,
      idSeccion: idSeccion,
      fecha: fecha,
      idPlani: idPlani,
    },
  })
    .then((resultado) => {
      res.send(resultado);
    })
    .catch((err) => {
      res.send(err);
    });
}

function getScoreSeccion(req, res) {
  const { idSeccion, fecha, idPlani } = req.body;
  Score.findAll({
    where: {
      idSeccion: idSeccion,
      fecha: fecha,
      idPlani: idPlani,
    },
  })
    .then((resultado) => {
      res.send(resultado);
    })
    .catch((err) => {
      res.send(err);
    });
}

function getScoreEntrenamiento(req, res) {
  const { fecha, idPlani } = req.body;
  Score.findAll({
    where: {
      fecha: fecha,
      idPlani: idPlani,
    },
  })
    .then((resultado) => {
      res.send(resultado);
    })
    .catch((err) => {
      res.send(err);
    });
}

function getScorePlanificacion(req, res) {
  const { idPlani } = req.body;
  Score.findAll({
    where: {
      idPlani: idPlani,
    },
  })
    .then((resultado) => {
      res.send(resultado);
    })
    .catch((err) => {
      res.send(err);
    });
}

module.exports = {
  setScore: setScore,
  getScoreAtletaWod: getScoreAtletaWod,
  getScoreEntrenamiento: getScoreEntrenamiento,
  getScorePlanificacion: getScorePlanificacion,
  getScoreSeccion: getScoreSeccion,
  getScoreWod: getScoreWod,
};
