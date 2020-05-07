/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "planificacion",
    {
      idPlanificacion: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: "idPlanificacion",
      },
      nombre: {
        type: DataTypes.STRING(240),
        allowNull: false,
        field: "nombre",
      },
    },
    {
      tableName: "Planificacion",
      timestamps: false,
    }
  );
};
