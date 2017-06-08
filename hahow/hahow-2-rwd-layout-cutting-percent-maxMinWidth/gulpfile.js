const gulp = require('gulp'),
      sass = require('gulp-sass'),
      pug = require('gulp-pug');

gulp.task('sass', () => {
    gulp.src('./src/scss/all.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist'));
});

gulp.task('pug', () => {
    gulp.src('./src/pug/index.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./dist'));
});

gul.task('default', ['sass', 'pug']);