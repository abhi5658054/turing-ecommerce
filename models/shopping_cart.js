/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shoppingCart', {
    itemId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      field: 'item_id'
    },
    cartId: {
      type: DataTypes.CHAR(32),
      allowNull: false,
      field: 'cart_id'
    },
    productId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'product_id'
    },
    attributes: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      field: 'attributes'
    },
    quantity: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'quantity'
    },
    buyNow: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1',
      field: 'buy_now'
    },
    addedOn: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'added_on'
    }
  }, {
    tableName: 'shopping_cart'
  });
};
