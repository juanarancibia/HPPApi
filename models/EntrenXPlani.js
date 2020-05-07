/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('entrenXPlani', {
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true,
      field: 'fecha'
    },
    idPlani: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      field: 'idPlani'
    },
    comentarios: {
      type: DataTypes.STRING(1024),
      allowNull: false,
      field: 'comentarios'
    }
  }, {
    tableName: 'EntrenXPlani'
  });
};
