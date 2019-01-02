'use strict';

global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),

    path: {
        task: require('./gulp/paths/tasks')
    }
}

$.path.task.forEach(function(taskPath){
    require(taskPath)();
});


$.gulp.task('default',
    $.gulp.series(
        $.gulp.parallel('pug', 'sass', 'scripts', 'scripts:lib'),
        $.gulp.parallel('watch', 'serve')
    )
);