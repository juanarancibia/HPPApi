/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wod', {
    idWod: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      field: 'idWod'
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true,
      field: 'fecha'
    },
    idSeccion: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      field: 'idSeccion'
    },
    idPlani: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      field: 'idPlani'
    },
    descripcion: {
      type: DataTypes.STRING(5000),
      allowNull: false,
      field: 'descripcion'
    },
    comentarios: {
      type: DataTypes.STRING(1024),
      allowNull: false,
      field: 'comentarios'
    },
    idTimer: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'idTimer'
    },
    score: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      field: 'score'
    },
    tipoScore: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'tipoScore'
    }
  }, {
    tableName: 'Wod'
  });
};
