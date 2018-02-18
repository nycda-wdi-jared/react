'use strict';
module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define('Comment', {
  	name: DataTypes.STRING,
  	message: DataTypes.TEXT,
    likers: DataTypes.ARRAY(DataTypes.INTEGER),
    user_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      references: {
        model: 'Users',
        key: 'id'
      },
      field: 'user_id',
      allowNull: false
    },
    movie_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      references: {
        model: 'Movies',
        key: 'id'
      },
      field: 'movie_id',
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return Comment;
};