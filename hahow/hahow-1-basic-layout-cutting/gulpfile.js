const gulp = require('gulp') ;
const sass = require('gulp-sass') ;

gulp.task(('sass'), () => {
    gulp.src('scss/all.scss')
        .pipe(sass())
        .pipe(gulp.dest('css/'));
});

gulp.task('copy-assets', () => {
    gulp.src('./pug/index.html')
        .pipe(gulp.dest('./'));
});

gulp.task('default', ['sass', 'copy-assets']);
