var requireDir = require('require-dir');

requireDir('./tasks', { recursive: true });

//var plumber = require("gulp-plumber");

//gulp.task("default", ['server'], function(){
//  gulp.watch(["sass/**/*.scss"], ["sass"]);
//});
