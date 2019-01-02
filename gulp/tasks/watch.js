'use strict';
module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('src/pug/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch('src/sass/**/*.scss', $.gulp.series('sass'));
        $.gulp.watch('src/js/**/*.js', $.gulp.series('sass'));
    });
};
