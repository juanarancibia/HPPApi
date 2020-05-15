const jwt = require("jsonwebtoken");

function validarEntrenador(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.verify(token, "ContraseñaJWT");
    console.log(payload);
    if (payload.rol == "Entrenador") {
      return next();
    } else {
      res.send("No esta autorizado para realizar esta operacion");
    }
  } catch (err) {
    console.log(err);
    res.json({ error: "Error al validar usuario" });
  }
}

function chequearAtleta(req, res, next) {
  const token = req.headers.authorization.split(" ")[1];
  const payload = jwt.verify(token, "ContraseñaJWT");
  if (payload.rol == "Atleta") {
    req.body.email = payload.usuario;
    return next();
  }
  return next();
}

function chequearPlanificacion(req, res, next) {
  const token = req.headers.authorization.split(" ")[1];
  const payload = jwt.verify(token, "ContraseñaJWT");
  if (payload.rol == "Atleta") {
    req.body.idPlani = payload.idPlani;
    return next();
  }
  return next();
}

function chequearVisibilidad(req, res, next) {
  const token = req.headers.authorization.split(" ")[1];
  const payload = jwt.verify(token, "ContraseñaJWT");
  if (payload.rol == "Atleta") {
    req.body.visible = "1";
    return next();
  }
  req.body.visible = ["0", "1"];
  return next();
}


module.exports = {
  validarEntrenador: validarEntrenador,
  chequearAtleta: chequearAtleta,
  chequearPlanificacion: chequearPlanificacion,
  chequearVisibilidad: chequearVisibilidad,
};
