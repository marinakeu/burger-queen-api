'use strict';
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    status: DataTypes.STRING,
    uid: DataTypes.INTEGER
  }, {});
  Orders.associate = function(models) {
    Orders.belongsTo(models.Users, {
      foreignKey: 'uid'
    });
    Orders.hasMany(models.OrdersAndProducts, {
      foreignKey: 'idOrder'
    });
  };

  // Orders.create({
  //   status: "pendente",
  //   uid: 3
  // });

  // Orders.create({
  //   status: "entregue",
  //   uid: 2
  // });

  return Orders;
};