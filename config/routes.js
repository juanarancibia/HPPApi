const controladorUsuarios = require("../controladores/controladorUsuarios");

module.exports = (app) => {
  app.get("", (req, res) => {
    console.log("Pagina principal");
    res.send("Pagina principal");
  });

  app.post("/signup", controladorUsuarios.signUp);
};
