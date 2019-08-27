'use strict';

let generateNameHelper = require('../helper/nameGenerator')

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('shops', [
        {
        name: generateNameHelper.generateName(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: generateNameHelper.generateName(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: generateNameHelper.generateName(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
     
    ]);
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('shops', null, {});
    
  }
};
