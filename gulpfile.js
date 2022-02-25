
const gulp = require("gulp");
const { src, dest }  = require("gulp");
const minify = require("gulp-minify");
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');



function minifyjs() {

    return src('src/scripts.js', { allowEmpty: true })
        .pipe(minify({noSource: true}))
        .pipe(dest('dist/js'))
}



function style() {
    return (
        gulp
        .src('./src/scss/**/styles.scss')
        // .pipe(sass())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream())
        );
}




function watch() {
    browserSync.init({
        server: {
            baseDir: './src'
        }
    });

    gulp.watch('./src/scss/**/*.scss', style);
    gulp.watch('./src/*.html').on('change', browserSync.reload);
    gulp.watch('./src/*.js').on('change', browserSync.reload);
}



exports.minifyjs = minifyjs;
exports.style = style;
exports.watch = watch;
// exports.default = gulp.series(css);

