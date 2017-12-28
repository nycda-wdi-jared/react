'use strict';
module.exports = function(sequelize, DataTypes) {
  var Profile = sequelize.define('Profile', {
    fav_veggie: DataTypes.STRING,
    fav_fruit: DataTypes.STRING,
    userID: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      unique: true,
      references: {
        model: 'Users',
        key: 'id'
      },
      field: 'user_id',
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return Profile;
};