var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('minjs',function(){
	gulp.src('./js.js')
		.pipe(uglify())
		.pipe(gulp.dest('./ysjs.js/'));
})