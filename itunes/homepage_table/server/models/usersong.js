'use strict';
module.exports = function(sequelize, DataTypes) {
  var UserSong = sequelize.define('UserSong', {
    id: {
      type: DataTypes.INTEGER(20),
      primaryKey: true,
      autoIncrement: true
    },
    userID: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      references: {
        model: 'Users',
        key: 'id'
      },
      field: 'user_id',
      allowNull: false
    },
    songID: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      references: {
        model: 'Songs',
        key: 'id'
      },
      field: 'song_id',
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        models.User.belongsToMany(models.Song, {through: 'UserSong'});
        models.Song.belongsToMany(models.User, {through: 'UserSong'});
      }
    }
  });
  return UserSong;
};