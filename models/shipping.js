/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "shipping",
    {
      shippingId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        field: "shipping_id"
      },
      shippingType: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: "shipping_type"
      },
      shippingCost: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        field: "shipping_cost"
      },
      shippingRegionId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        field: "shipping_region_id"
      }
    },
    {
      tableName: "shipping",
      timestamps: false
    }
  );
};
