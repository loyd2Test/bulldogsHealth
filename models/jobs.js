'use strict';
module.exports = (sequelize, DataTypes) => {
  const Job = sequelize.define('Job', {
    title: DataTypes.STRING,
    city: DataTypes.STRING,
    state:DataTypes.CHAR(3),
    startDate:DataTypes.DATEONLY,
    endDate:DataTypes.DATEONLY,
    description:DataTypes.TEXT('medium'),
    filled:DataTypes.BOOLEAN


    // name: DataTypes.STRING,
    // allowNull: false,
    
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