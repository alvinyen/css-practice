const gulp = require('gulp') ;
const sass = require('gulp-sass') ;

gulp.task(('sass'), () => {
    gulp.src('scss/all.scss')
        .pipe(sass())
        .pipe(gulp.dest('css/'));
});