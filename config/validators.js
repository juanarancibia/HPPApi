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

module.exports = {
  validarEntrenador: validarEntrenador,
};
