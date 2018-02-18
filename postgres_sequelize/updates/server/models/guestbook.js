'use strict';
module.exports = function(sequelize, DataTypes) {
  var Guestbook = sequelize.define('Guestbook', {
    name: DataTypes.STRING,
    message: DataTypes.STRING,
    isUpdating: {
      type: DataTypes.BOOLEAN,
      default: false
    }
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return Guestbook;
};