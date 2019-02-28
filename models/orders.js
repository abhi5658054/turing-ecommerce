/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "orders",
    {
      orderId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        field: "order_id"
      },
      totalAmount: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        defaultValue: "0.00",
        field: "total_amount"
      },
      createdOn: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "created_on"
      },
      shippedOn: {
        type: DataTypes.DATE,
        allowNull: true,
        field: "shipped_on"
      },
      status: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        defaultValue: "0",
        field: "status"
      },
      comments: {
        type: DataTypes.STRING(255),
        allowNull: true,
        field: "comments"
      },
      customerId: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        field: "customer_id"
      },
      authCode: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: "auth_code"
      },
      reference: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: "reference"
      },
      shippingId: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        field: "shipping_id"
      },
      taxId: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        field: "tax_id"
      }
    },
    {
      tableName: "orders",
      timestamps: false
    }
  );
};
