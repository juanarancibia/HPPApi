/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tipoScore', {
    idTipo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      field: 'idTipo'
    },
    nombre: {
      type: DataTypes.STRING(30),
      allowNull: false,
      field: 'nombre'
    }
  }, {
    tableName: 'TipoScore'
  });
};
