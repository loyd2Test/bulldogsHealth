'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    website: DataTypes.STRING,
    email:DataTypes.STRING,
  });
  Company.associate = function(models) {
    // associations can be defined here
    Company.hasMany(models.Job,{
    	foreignKey: 'companyId',
    	as: 'jobs'
    });
  };
  return Company;
};  