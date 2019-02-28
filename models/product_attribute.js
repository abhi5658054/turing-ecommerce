/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('productAttribute', {
    productId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      field: 'product_id'
    },
    attributeValueId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      field: 'attribute_value_id'
    }
  }, {
    tableName: 'product_attribute'
  });
};
