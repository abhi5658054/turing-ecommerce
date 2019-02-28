/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product', {
    productId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      field: 'product_id'
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'name'
    },
    description: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      field: 'description'
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'price'
    },
    discountedPrice: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00',
      field: 'discounted_price'
    },
    image: {
      type: DataTypes.STRING(150),
      allowNull: true,
      field: 'image'
    },
    image2: {
      type: DataTypes.STRING(150),
      allowNull: true,
      field: 'image_2'
    },
    thumbnail: {
      type: DataTypes.STRING(150),
      allowNull: true,
      field: 'thumbnail'
    },
    display: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: '0',
      field: 'display'
    }
  }, {
    tableName: 'product'
  });
};
