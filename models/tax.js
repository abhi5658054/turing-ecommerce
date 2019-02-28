/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tax', {
    taxId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      field: 'tax_id'
    },
    taxType: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'tax_type'
    },
    taxPercentage: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'tax_percentage'
    }
  }, {
    tableName: 'tax'
  });
};
