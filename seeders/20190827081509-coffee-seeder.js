'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const shops = await queryInterface.sequelize.query(
      `SELECT id from shops;`
    );

    const courseRows = shops[0];

    return await queryInterface.bulkInsert('coffees', [
      {name: 'Movie 1', type: 'ABC', ShopId: courseRows[0].id,createdAt: new Date(), updatedAt: new Date(),},
      {name: 'Movie 1', type: 'ABC', ShopId: courseRows[0].id,createdAt: new Date(), updatedAt: new Date(),},
      {name: 'Movie 1', type: 'ABC', ShopId: courseRows[0].id,createdAt: new Date(), updatedAt: new Date(),},
    ], {});
  },

  down: async(queryInterface, Sequelize) => {

     return await queryInterface.bulkDelete('coffees', null, {});
 
  }
};
