'use strict';
module.exports = (sequelize, DataTypes) => {
  const candidate = sequelize.define('Candidate', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  candidate.associate = function(models) {
    // associations can be defined here
  };
  return candidate;
};