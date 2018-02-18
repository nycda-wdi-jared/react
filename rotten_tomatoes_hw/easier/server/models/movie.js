module.exports = function (sequelize, DataTypes) {
	var Movie = sequelize.define('Movie', {
		title: {
			type: DataTypes.STRING
		},
		year: {
			type: DataTypes.STRING
		},
		imdbID: {
			type: DataTypes.STRING
		},
		poster: {
			type: DataTypes.STRING
		},
		description: {
			type: DataTypes.STRING		
		},
		rating: DataTypes.INTEGER,
		raters: DataTypes.ARRAY(DataTypes.TEXT),
		likers: DataTypes.ARRAY(DataTypes.INTEGER)
	}, {
		classMethods: {
      		associate: function(models) {
      		},
		},
		instanceMethods: {
		}
	});
	return Movie;
};