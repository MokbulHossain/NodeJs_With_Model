'use strict';

let RendomNumber = require('../helper/randomNumber')
module.exports = {
  up: async (queryInterface, Sequelize) => {

    const shops = await queryInterface.sequelize.query(
      `SELECT id from shops;`
    );

    let ids = shops[0].map(shop=>shop.id); console.log(ids)
    return await queryInterface.bulkInsert('coffees', [
      {name: 'Movie 1', type: 'ABC', ShopId: RendomNumber.getRandomItem(ids),createdAt: new Date(), updatedAt: new Date(),},
      {name: 'Movie 1', type: 'ABC', ShopId: RendomNumber.getRandomItem(ids),createdAt: new Date(), updatedAt: new Date(),},
      {name: 'Movie 1', type: 'ABC', ShopId: RendomNumber.getRandomItem(ids),createdAt: new Date(), updatedAt: new Date(),},
    ], {});
  },

  down: async(queryInterface, Sequelize) => {

     return await queryInterface.bulkDelete('coffees', null, {});
 
  }
};
