/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('attributeValue', {
    attributeValueId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      field: 'attribute_value_id'
    },
    attributeId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'attribute_id'
    },
    value: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'value'
    }
  }, {
    tableName: 'attribute_value'
  });
};
