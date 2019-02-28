/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shippingRegion', {
    shippingRegionId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      field: 'shipping_region_id'
    },
    shippingRegion: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'shipping_region'
    }
  }, {
    tableName: 'shipping_region'
  });
};
