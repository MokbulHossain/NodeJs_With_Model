'use strict';
module.exports = (sequelize, DataTypes) => {
  const Coffee = sequelize.define('Coffee', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    //shopId: DataTypes.INTEGER
  }, {});
  Coffee.associate = function(models) {
    //Coffee belongs to shop
    Coffee.belongsTo(models.Shop,{
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      foreignKey: "ShopId"
    })
  };
  Coffee.tableName = 'coffees'
  return Coffee;
};