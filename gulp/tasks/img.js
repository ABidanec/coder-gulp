'use strict';

module.exports = function () {
  $.gulp.task('img', function () {
      return $.gulp.src('src/img/**/*.{png,jpg,gif,jpeg}')
          .pipe($.gp.tinypng('API_KEY'))
          .pipe($.gulp.dest('dist/img/'));
  });

  $.gulp.task('pic', function () {
      return $.gulp.src('src/pic/**/*.{png,jpg,gif,jpeg}')
          .pipe($.gp.tinypng('GhnQ05zH65PpBhWg0xPVjgBgLx750gZh'))
          .pipe($.gulp.dest('dist/pic/'));
  });
};