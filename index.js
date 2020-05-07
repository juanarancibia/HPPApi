const express = require("express");
const app = express();
const routes = require("./config/routes");
const bodyparser = require("body-parser");

app.use(bodyparser.json());

routes(app);

app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});
