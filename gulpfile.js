// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('./week1_css/homework5/css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(function(f) {
            return f.base;
        }))

    gulp.src('./week1_css/homework3/css/*.scss')
    .pipe(sass())
    .pipe(gulp.dest(function(f) {
        return f.base;
    }))    
});

gulp.task('default', ['sass'], function() {
    gulp.watch('./week1_css/homework5/css/*.scss', ['sass']);
    gulp.watch('./week1_css/homework3/css/*.scss', ['sass']);
})