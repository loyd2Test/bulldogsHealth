'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('admins', [{
      firstName: 'Loyd',
      lastName: 'Stewart',
      userName: 'loydstewart2',
      email: 'loydstewart2@icloud.com',
      password: 'password',
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
