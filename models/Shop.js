'use strict';
module.exports = (sequelize, DataTypes) => {
  const Shop = sequelize.define('Shop', {
    name: DataTypes.STRING
  }, {});
  Shop.associate = function(models) {
    // Shop has many coffee
    Shop.hasMany(models.Coffee)
  };
  Shop.tableName = 'shops'
  return Shop;
};