/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rol', {
    idRol: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      field: 'idRol'
    },
    nombreRol: {
      type: DataTypes.STRING(30),
      allowNull: false,
      field: 'nombreRol'
    }
  }, {
    tableName: 'Rol'
  });
};
