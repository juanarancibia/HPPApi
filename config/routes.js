const controladorUsuarios = require("../controladores/controladorUsuarios");
const controladorPlani = require("../controladores/controladorPlanificacion");
const controladorEntrenamiento = require("../controladores/controladorEntrenamiento");

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
    "/entrenamiento",
    validators.validarEntrenador,
    controladorEntrenamiento.setEntrenamiento
  );
};
