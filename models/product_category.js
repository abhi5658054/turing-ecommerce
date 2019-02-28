/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('productCategory', {
    productId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      field: 'product_id'
    },
    categoryId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      field: 'category_id'
    }
  }, {
    tableName: 'product_category'
  });
};
