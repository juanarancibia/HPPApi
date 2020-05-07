/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tipoSeccion', {
    idTipo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      field: 'idTipo'
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'nombre'
    }
  }, {
    tableName: 'TipoSeccion'
  });
};
