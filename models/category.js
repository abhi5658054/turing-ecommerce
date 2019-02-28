/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('category', {
    categoryId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      field: 'category_id'
    },
    departmentId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'department_id'
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'name'
    },
    description: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      field: 'description'
    }
  }, {
    tableName: 'category'
  });
};
