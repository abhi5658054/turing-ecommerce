/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('audit', {
    auditId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      field: 'audit_id'
    },
    orderId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'order_id'
    },
    createdOn: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_on'
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'message'
    },
    code: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'code'
    }
  }, {
    tableName: 'audit'
  });
};
