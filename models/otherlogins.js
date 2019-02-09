'use strict';
module.exports = (sequelize, DataTypes) => {
  const otherLogins = sequelize.define('otherLogins', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  otherLogins.associate = function(models) {
    // associations can be defined here
    otherLogins.belongsTo(models.Company, {
    	foreignKey: 'companyId',
    	onDelete: 'CASCADE',
    })
  };
  return otherLogins;
};