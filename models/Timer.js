/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('timer', {
    idTimer: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      field: 'idTimer'
    },
    tipoTimer: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'tipoTimer'
    }
  }, {
    tableName: 'Timer'
  });
};
