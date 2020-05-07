/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "usuario",
    {
      email: {
        type: DataTypes.STRING(320),
        allowNull: false,
        primaryKey: true,
        field: "email",
      },
      contrasena: {
        type: DataTypes.STRING(60),
        allowNull: false,
        field: "contrasena",
      },
      rol: {
        type: DataTypes.ENUM("Entrenador", "Atleta"),
        allowNull: false,
        defaultValue: "Atleta",
        field: "rol",
      },
      nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: "nombre",
      },
      apellido: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: "apellido",
      },
      idPlanificacion: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        field: "idPlanificacion",
      },
      sexo: {
        type: DataTypes.ENUM("Masculino", "Femenino", "Otro"),
        allowNull: false,
        field: "sexo",
      },
      fechaNac: {
        type: DataTypes.STRING(10),
        allowNull: true,
        field: "fechaNac",
      },
    },
    {
      tableName: "Usuario",
      timestamps: false,
    }
  );
};
