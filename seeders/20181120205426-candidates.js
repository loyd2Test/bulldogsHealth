'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return queryInterface.bulkInsert('candidates', [{
        firstName: 'Bob',
        lastName: 'Smith',
        email: 'bobsmith@gmail.com',
        address: '8321932 road',
        phone: '863-370-3213',
        password: 'toor',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // {
      //   name: 'Health Central',
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   name: 'Orlando Regional Medical Center',
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
