const gulp = require('gulp');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');

gulp.task('styles', () => {
    return gulp.src('./css/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build'))
})

gulp.task('watch', () => {
    gulp.watch('css/style.css', gulp.series('styles'));
})