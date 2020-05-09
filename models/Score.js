/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "score",
    {
      email: {
        type: DataTypes.STRING(320),
        allowNull: false,
        primaryKey: true,
        field: "email",
      },
      idWod: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        field: "idWod",
      },
      idSeccion: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        field: "idSeccion",
      },
      fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        primaryKey: true,
        field: "fecha",
      },
      idPlani: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        field: "idPlani",
      },
      score: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: "score",
      },
    },
    {
      tableName: "Score",
      timestamps: false,
    }
  );
};
