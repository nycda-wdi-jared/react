var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('task-name', () => {
	console.log("first gulp")
});

gulp.task('default', ['watch']);

gulp.task('sass', function(){
	return gulp.src('public/scss/styles.scss')
		.pipe(sass())
		.pipe(gulp.dest('public/css'))
});

gulp.task('watch', function() {
  gulp.watch('public/scss/styles.scss', ['sass']);
});