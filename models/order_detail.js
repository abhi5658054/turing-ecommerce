/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "orderDetail",
    {
      itemId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        field: "item_id"
      },
      orderId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        field: "order_id"
      },
      productId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        field: "product_id"
      },
      attributes: {
        type: DataTypes.STRING(1000),
        allowNull: false,
        field: "attributes"
      },
      productName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: "product_name"
      },
      quantity: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        field: "quantity"
      },
      unitCost: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        field: "unit_cost"
      }
    },
    {
      tableName: "order_detail",
      timestamps: false
    }
  );
};
