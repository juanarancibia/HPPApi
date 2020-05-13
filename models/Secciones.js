/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "secciones",
    {
      idPlani: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        field: "idPlani",
      },
      idSeccion: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: "idSeccion",
      },
      fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        primaryKey: true,
        field: "fecha",
      },
      tipoSeccion: {
        type: DataTypes.ENUM(
          "Fuerza",
          "Activacion",
          "Estiramiento",
          "Wods",
          "Estructura",
          "Zona Media",
          "Calentamiento",
          "Test",
          "Extra",
          "Cardio",
          "Oly",
          "Rest"
        ),
        allowNull: false,
        field: "tipoSeccion",
      },
      comentarios: {
        type: DataTypes.STRING(1024),
        allowNull: true,
        field: "comentarios",
      },
    },
    {
      tableName: "Secciones",
      timestamps: false,
    }
  );
};
