'use strict';
module.exports = function () {
    $.gulp.task('serve', function() {
        $.bs.init({
            server: {
                baseDir: "./dist"
            }
        });
        $.bs.watch('dist', $.bs.reload);
    });
};
