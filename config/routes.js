const controladorUsuarios = require("../controladores/controladorUsuarios");
const controladorPlani = require("../controladores/controladorPlanificacion");
const controladorEntrenamiento = require("../controladores/controladorEntrenamiento");
const controladorSeccion = require("../controladores/controladorSeccion");
const controladorWod = require("../controladores/controladorWod");
const controladorScore = require("../controladores/controladorScore");

const validators = require("./validators");

module.exports = (app) => {
  app.get("", (req, res) => {
    console.log("Pagina principal");
    res.send("Pagina principal");
  });

  app.post("/signup", controladorUsuarios.signUp);
  app.post("/login", controladorUsuarios.logIn);

  app.post(
    "/planificacion",
    validators.validarEntrenador,
    controladorPlani.setPlanificacion
  );
  app.post(
    "/planificacion/entrenamiento", [validators.chequearPlanificacion, validators.chequearVisibilidad],
    controladorPlani.getEntrenamiento
  );
  app.get("/planificacion", validators.validarEntrenador, controladorPlani.getPlanis);

  app.post(
    "/entrenamiento",
    validators.validarEntrenador,
    controladorEntrenamiento.setEntrenamiento
  );
  app.patch("/entrenamiento", controladorEntrenamiento.updateEntrenamiento);

  app.post("/seccion", controladorSeccion.setSeccion);

  app.post("/wod", controladorWod.setWod);

  app.post("/score", controladorScore.setScore);
  app.get(
    "/score-atleta-wod",
    validators.chequearAtleta,
    controladorScore.getScoreAtletaWod
  );
  app.get("/score-wod", controladorScore.getScoreWod);
  app.get("/score-entrenamiento", controladorScore.getScoreEntrenamiento);
  app.get("/score-seccion", controladorScore.getScoreSeccion);
  app.get("/socre-planificacion"), controladorScore.getScorePlanificacion;
};
