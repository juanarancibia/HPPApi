/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "wod",
    {
      idWod: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: "idWod",
      },
      fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        primaryKey: true,
        field: "fecha",
      },
      idSeccion: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        field: "idSeccion",
      },
      idPlani: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        field: "idPlani",
      },
      descripcion: {
        type: DataTypes.STRING(5000),
        allowNull: false,
        field: "descripcion",
      },
      comentarios: {
        type: DataTypes.STRING(1024),
        allowNull: true,
        field: "comentarios",
      },
      idTimer: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        field: "idTimer",
      },
      tipoScore: {
        type: DataTypes.ENUM("Reps", "Tiempo", "Peso", "Otro"),
        allowNull: true,
        field: "tipoScore",
      },
    },
    {
      tableName: "Wod",
      timestamps: false,
    }
  );
};
