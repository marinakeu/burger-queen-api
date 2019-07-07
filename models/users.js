'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    email: DataTypes.STRING
  }, {});
  Users.associate = function(models) {
    Users.hasMany(models.Orders, {
      foreignKey: 'uid'
    });
  };

  // User.create({
  //   email: "salao@gmail.com"
  // });

  // User.create({
  //   email: "cozinha@gmail.com"
  // });

  return Users;
};

