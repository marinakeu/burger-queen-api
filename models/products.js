'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {});
  Products.associate = function(models) {
    Products.hasMany(models.OrdersAndProducts, {
      foreignKey: 'idProducts'
    });
  };

  // Products.create({
  //   name: "Café americano",
  //   price: 5
  // });

  // Products.create({
  //   name: "Café com leite",
  //   price: 7
  // });

  // Products.create({
  //   name: "Sanduíche de presunto e queijo",
  //   price: 10
  // });

  // Products.create({
  //   name: "Suco de fruta natural",
  //   price: 7
  // });

  return Products;
};