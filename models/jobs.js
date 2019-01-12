'use strict';
module.exports = (sequelize, DataTypes) => {
  const Job = sequelize.define('Job', {
    name: DataTypes.STRING,
    allowNull: false,
  });
  Job.associate = function(models) {
    // associations can be defined here
    Job.belongsTo(models.Company, {
    	foreignKey: 'companyId',
    	onDelete: 'CASCADE',
    })
  };
  return Job;
};