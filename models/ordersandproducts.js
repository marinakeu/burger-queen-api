'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrdersAndProducts = sequelize.define('OrdersAndProducts', {
    idOrder: DataTypes.INTEGER,
    idProducts: DataTypes.INTEGER
  }, {});
  OrdersAndProducts.associate = function (models) {
    OrdersAndProducts.belongsTo(models.Products, {
      foreignKey: 'idProducts'
    });
    OrdersAndProducts.belongsTo(models.Orders, {
      foreignKey: 'idOrder'
    });
  };
  return OrdersAndProducts;
};