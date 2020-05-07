/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('detalleTimer', {
    idDetalle: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      field: 'idDetalle'
    },
    idTimer: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      field: 'idTimer'
    },
    tiempoTrabajo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'tiempoTrabajo'
    },
    tiempoDescanso: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'tiempoDescanso'
    },
    cantVueltas: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'cantVueltas'
    }
  }, {
    tableName: 'DetalleTimer'
  });
};
