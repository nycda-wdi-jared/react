'use strict';
module.exports = function(sequelize, DataTypes) {
  var Application = sequelize.define('Application', {
    companyName: DataTypes.STRING,
    position: DataTypes.STRING,
    dateApplied: DataTypes.STRING,
    replied: DataTypes.BOOLEAN,
    nextEvent: DataTypes.STRING,
    notes: DataTypes.STRING,
    resumeSubmitted: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        Application.belongsTo(models.User);
      }
    }
  });
  return Application;
};