/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "timer",
    {
      idTimer: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        field: "idTimer",
      },
      tipoTimer: {
        type: DataTypes.ENUM("AMRAP", "FOR TIME", "OTM", "INTERVALOS"),
        allowNull: false,
        field: "tipoTimer",
      },
    },
    {
      tableName: "Timer",
      timestamps: false,
    }
  );
};
