var gulp = require('gulp');
var $ = require('gulp-load-plugins')({rename: {'gulp-if': 'if'}});
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var jshint = require('gulp-jshint');
var jshintStylish = require('jshint-stylish');
var csslint = require('gulp-csslint');

/* Tasks base */
gulp.task('copy', ['clean'], function() {
    return gulp.src(['src/**/*'])
        .pipe(gulp.dest('docs'));
});

gulp.task('clean', function() {
    return gulp.src('docs/*', {read: false})
        .pipe($.clean());
});

/* Minifys */
// gulp.task('minify-js', function() {
//   return gulp.src('src/**/*.js')
//     .pipe($.uglify())
//     .pipe(gulp.dest('docs/'))
// });

// gulp.task('minify-css', function() {
//   return gulp.src('src/**/*.css')
//     .pipe($.cssnano({safe: true}))
//     .pipe(gulp.dest('docs/'))
// });

// gulp.task('minify-html', function() {
//   return gulp.src('src/**/*.html')
//     .pipe($.htmlmin({collapseWhitespace: true}))
//     .pipe(gulp.dest('docs/'))
// });

/* Concatenação */
// gulp.task('useref', function () {
//     return gulp.src('src/*.html')
//         .pipe($.useref())
//         .pipe($.if('*.html', $.inlineSource()))
//         .pipe($.if('*.html', $.htmlmin({collapseWhitespace: true})))
//         .pipe($.if('*.js', $.uglify()))
//         .pipe($.if('*.css', $.cssnano({safe: true})))
//         .pipe(gulp.dest('docs'));
// });

/* Imagens */
// gulp.task('imagemin', function() {
//     return gulp.src('src/**/img/*')
//         .pipe($.imagemin({
//             progressive: true,
//             svgoPlugins: [
//                 {removeViewBox: false},
//                 {cleanupIDs: false}
//             ]
//         }))
//         .pipe(gulp.dest('docs/assets/img'));
// });

/* Sass */
gulp.task('sass', function() {
    return gulp.src('src/peruglr-themes/moderna-ead/assets/sass/*sass')
        .pipe(sass({
            // includePaths: 'src/peruglr-themes/moderna-formando-leitores/sass/components/'
        }))
        .pipe(autoprefixer())
        .pipe(gulp.dest('src/peruglr-themes/moderna-ead/assets/css/'))
        .pipe(reload({stream:true}));
});

/* Browser Sync */
gulp.task('browser-sync', function() {
    browserSync.init({
        open: false,
		server: {
			baseDir: 'src'
		}
    });
});

/* Alias */
gulp.task('default', ['sass', 'browser-sync'], function () {
    gulp.watch('src/peruglr-themes/moderna-ead/assets/sass/*sass',['sass']);

    gulp.watch('src/peruglur-content/*.js').on('change', function(event) {
        gulp.src(event.path)
            .pipe(jshint())
            .pipe(jshint.reporter(jshintStylish));
    });

    gulp.watch('src/peruglr-themes/moderna-ead/assets/css/').on('change', function(event) {
        gulp.src(event.path)
            .pipe(csslint())
            .pipe(csslint.formatter());
    });

    gulp.watch('src/**/*').on('change', browserSync.reload);
});

gulp.task('build', ['copy'], function (callback) {
    return $.sequence(['minify-js', 'minify-css', 'minify-html', 'imagemin'], 'useref')(callback)
});

