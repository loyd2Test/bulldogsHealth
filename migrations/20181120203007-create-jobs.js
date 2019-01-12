'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Job', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.CHAR(3)
      },
      startDate: {
        type: Sequelize.DATEONLY
      },
      endDate: {
        type: Sequelize.DATEONLY
      },
      description: {
        type: Sequelize.TEXT('medium')
      },
      filled: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      companyId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Companies',
          key: 'id',
          as: 'companyId'
        },
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Jobs');
  }
};