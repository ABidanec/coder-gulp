'use strict';
module.exports = function(){
    $.gulp.task('sass', function () {
        return $.gulp.src('src/sass/main.scss')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass())
            .pipe($.gp.autoprefixer({
                browsers: ['last 10 versions'],
                cascade: true
            }))
            .on("error", $.gp.notify.onError({
                message: "Error: <%= error.message %>",
                title: "Sass"
            }))
            .pipe($.gp.csso())
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest('dist/css'))
            .pipe($.bs.reload({stream:true}))
    });
};
