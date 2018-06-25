const gulp = require('gulp');
const watch = require('gulp-watch');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

let import_style = {
    bootstrap_css: "node_modules/bootstrap/dist/css/bootstrap.min.css",
    my_css: "assets/css/*.css",
    jquery: "node_modules/jquery/dist/jquery.min.js",
    bootstrap_js: "node_modules/bootstrap/dist/js/bootstrap.min.js",
    my_js: "assets/js/*.js",
    font: "assets/fonts/*",
    index: "index.html"
};

let export_style = {
    css: "production/css/",
    js: "production/js/"
};

gulp.task('css', function () {
    return gulp.src([import_style.bootstrap_css, import_style.my_css])
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest(export_style.css))
        .pipe(browserSync.stream());
});

gulp.task('js', function () {
    return gulp.src([import_style.jquery, import_style.bootstrap_js,import_style.my_js])
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest(export_style.js))
        .pipe(browserSync.stream());
});


gulp.task('serve', [], function () {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        port: 5000
    });
    gulp.watch(import_style.my_css, ['css']);
    gulp.watch(import_style.my_js, ['my_js']);
    gulp.watch("*.html").on('change', browserSync.reload);
});
gulp.task('watch', function () {
    gulp.watch(import_style.my_css, ['css']);
    gulp.watch(import_style.my_js, ['my_js']);
});

gulp.task('default', ['css', 'js', 'serve', 'my_js']);