'use strict';
module.exports = function(sequelize, DataTypes) {
  var Image = sequelize.define('Image', {
    image_src: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return Image;
};